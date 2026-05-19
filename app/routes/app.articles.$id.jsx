import { useCallback, useEffect, useRef, useState } from "react";
import { useFetcher, useLoaderData, useNavigate, useRevalidator } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticateAdmin } from "../lib/shopify-auth.server";
import { assertAllowedEmail } from "../lib/auth.server";
import { getDraftById, updateDraftDoc, markPublished } from "../models/article-draft.server";
import { listBlogs } from "../lib/shopify/blogs.server";
import { getArticle } from "../lib/shopify/articles.server";
import {
  createArticle,
  resolveArticleAuthor,
  updateArticle,
} from "../lib/shopify/articles.server";
import { searchProducts, searchCollections } from "../lib/shopify/catalog.server";
import { exportArticleHtml } from "../lib/blocknote/export-html.server";
import { BlogEditor, insertEmbedBlock } from "../components/editor/BlogEditor";
import bulmaStyles from "bulma/css/bulma.min.css?url";
import articleContentStyles from "../styles/article-content.css?url";
import { useAppPath } from "../lib/use-app-path";

export const links = () => [
  { rel: "stylesheet", href: bulmaStyles },
  { rel: "stylesheet", href: articleContentStyles },
];

export const loader = async ({ request, params }) => {
  const { admin, session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  const draft = await getDraftById(params.id, session.shop);
  if (!draft) {
    throw new Response("Not found", { status: 404 });
  }

  const blogs = await listBlogs(admin);
  let shopifyArticle = null;
  if (draft.shopifyArticleGid) {
    try {
      shopifyArticle = await getArticle(admin, draft.shopifyArticleGid);
    } catch {
      shopifyArticle = null;
    }
  }

  return {
    draft,
    blogs,
    shopifyArticle,
    htmlPreview: draft.htmlPreview,
  };
};

export const action = async ({ request, params }) => {
  const { admin, session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  const draft = await getDraftById(params.id, session.shop);
  if (!draft) {
    return { error: "Borrador no encontrado" };
  }

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "save") {
    const title = formData.get("title");
    const blocknoteDocRaw = formData.get("blocknoteDoc");
    let blocknoteDoc = draft.blocknoteDoc;
    if (typeof blocknoteDocRaw === "string") {
      try {
        blocknoteDoc = JSON.parse(blocknoteDocRaw);
      } catch {
        return { error: "JSON del documento inválido" };
      }
    }
    await updateDraftDoc(params.id, session.shop, {
      title: typeof title === "string" ? title : draft.title,
      blocknoteDoc,
    });
    return { ok: true, intent: "save" };
  }

  if (intent === "preview") {
    const blocknoteDocRaw = formData.get("blocknoteDoc");
    let blocknoteDoc = draft.blocknoteDoc;
    if (typeof blocknoteDocRaw === "string") {
      blocknoteDoc = JSON.parse(blocknoteDocRaw);
    }
    const html = await exportArticleHtml(blocknoteDoc, admin);
    await updateDraftDoc(params.id, session.shop, { htmlPreview: html });
    return { ok: true, intent: "preview", htmlPreview: html };
  }

  if (intent === "publish") {
    const title = formData.get("title") || draft.title;
    const blocknoteDocRaw = formData.get("blocknoteDoc");
    let blocknoteDoc = draft.blocknoteDoc;
    if (typeof blocknoteDocRaw === "string") {
      blocknoteDoc = JSON.parse(blocknoteDocRaw);
    }

    const bodyHtml = await exportArticleHtml(blocknoteDoc, admin);

    let articleGid = draft.shopifyArticleGid;
    if (articleGid) {
      await updateArticle(admin, {
        id: articleGid,
        title: String(title),
        bodyHtml,
        blogId: draft.shopifyBlogGid,
      });
    } else {
      const created = await createArticle(admin, {
        blogId: draft.shopifyBlogGid,
        title: String(title),
        bodyHtml,
        author: resolveArticleAuthor(session),
      });
      articleGid = created.id;
    }

    await updateDraftDoc(params.id, session.shop, {
      title: String(title),
      blocknoteDoc,
    });
    await markPublished(params.id, session.shop, articleGid, bodyHtml);

    return { ok: true, intent: "publish", articleGid };
  }

  if (intent === "searchProducts") {
    const q = String(formData.get("query") || "");
    const products = await searchProducts(admin, q, 10);
    return { products };
  }

  if (intent === "searchCollections") {
    const q = String(formData.get("query") || "");
    const collections = await searchCollections(admin, q, 10);
    return { collections };
  }

  return { error: "Acción desconocida" };
};

function EditorPage() {
  const { draft, blogs, shopifyArticle, htmlPreview: initialPreview } =
    useLoaderData();
  const fetcher = useFetcher();
  const searchFetcher = useFetcher();
  const navigate = useNavigate();
  const articlesPath = useAppPath("/app/articles");
  const shopify = useAppBridge();
  const revalidator = useRevalidator();

  const [title, setTitle] = useState(draft.title);
  const [doc, setDoc] = useState(draft.blocknoteDoc);
  const [tab, setTab] = useState("edit");
  const [previewHtml, setPreviewHtml] = useState(initialPreview || "");
  const [pickerKind, setPickerKind] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const editorRef = useRef(null);
  const saveTimeoutRef = useRef(null);

  const blogTitle =
    blogs.find((b) => b.id === draft.shopifyBlogGid)?.title || draft.shopifyBlogGid;

  const scheduleSave = useCallback(
    (nextDoc, nextTitle) => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        const fd = new FormData();
        fd.set("intent", "save");
        fd.set("title", nextTitle ?? title);
        fd.set("blocknoteDoc", JSON.stringify(nextDoc ?? doc));
        fetcher.submit(fd, { method: "post" });
      }, 1500);
    },
    [fetcher, title, doc],
  );

  const handleDocChange = useCallback(
    (nextDoc) => {
      setDoc(nextDoc);
      scheduleSave(nextDoc, title);
    },
    [scheduleSave, title],
  );

  useEffect(() => {
    if (fetcher.data?.intent === "publish" && fetcher.data?.ok) {
      shopify.toast.show("Artículo publicado en Shopify");
      revalidator.revalidate();
    }
    if (fetcher.data?.intent === "save" && fetcher.data?.ok) {
      shopify.toast.show("Guardado");
    }
    if (fetcher.data?.intent === "preview" && fetcher.data?.htmlPreview) {
      setPreviewHtml(fetcher.data.htmlPreview);
      setTab("preview");
    }
  }, [fetcher.data, shopify, revalidator]);

  const handlePublish = () => {
    const fd = new FormData();
    fd.set("intent", "publish");
    fd.set("title", title);
    fd.set("blocknoteDoc", JSON.stringify(doc));
    fetcher.submit(fd, { method: "post" });
  };

  const handlePreview = () => {
    const fd = new FormData();
    fd.set("intent", "preview");
    fd.set("blocknoteDoc", JSON.stringify(doc));
    fetcher.submit(fd, { method: "post" });
  };

  const runSearch = (kind, query) => {
    const fd = new FormData();
    fd.set("intent", kind === "product" ? "searchProducts" : "searchCollections");
    fd.set("query", query);
    searchFetcher.submit(fd, { method: "post" });
  };

  const insertFromPicker = (item, kind) => {
    const editor = editorRef.current;
    if (!editor) return;

    if (kind === "product") {
      insertEmbedBlock(editor, "product", {
        productGid: item.id,
        productTitle: item.title,
        productImageUrl: item.featuredImage?.url || "",
        productHandle: item.handle || "",
        layout: "card",
      });
    } else {
      insertEmbedBlock(editor, "collection", {
        collectionGid: item.id,
        collectionTitle: item.title,
        collectionImageUrl: item.image?.url || "",
        collectionHandle: item.handle || "",
        layout: "card",
      });
    }
    setPickerKind(null);
    setSearchQuery("");
  };

  const searchResults =
    pickerKind === "product"
      ? searchFetcher.data?.products
      : pickerKind === "collection"
        ? searchFetcher.data?.collections
        : null;

  const isPublishing =
    fetcher.state !== "idle" && fetcher.formData?.get("intent") === "publish";

  return (
    <s-page heading={title || "Editar artículo"} inlineSize="large">
      <s-button
        slot="primary-action"
        variant="primary"
        onClick={handlePublish}
        {...(isPublishing ? { loading: true } : {})}
      >
        Publicar
      </s-button>
      <s-button slot="secondary-actions" onClick={handlePreview}>
        Vista previa
      </s-button>
      <s-button slot="secondary-actions" onClick={() => navigate(articlesPath)}>
        Volver
      </s-button>

      {fetcher.data?.error ? (
        <s-banner tone="critical" heading="Error">
          {fetcher.data.error}
        </s-banner>
      ) : null}

      <s-section padding="base">
        <s-stack direction="block" gap="base">
          <s-text-field
            label="Título"
              value={title}
              onChange={(e) => {
                const next = e.target.value;
                setTitle(next);
                scheduleSave(doc, next);
              }}
             
            ></s-text-field>
          <s-paragraph>
            Blog: {blogTitle}
            {draft.shopifyArticleGid ? (
              <>
                {" "}
                · Enlazado a Shopify
                {shopifyArticle ? ` (${shopifyArticle.handle})` : ""}
              </>
            ) : (
              " · Borrador local"
            )}
            {" "}
            · Estado: {draft.status === "published" ? "Publicado" : "Borrador"}
          </s-paragraph>

          <s-stack direction="inline" gap="base">
            <s-button
              variant={tab === "edit" ? "primary" : "secondary"}
              onClick={() => setTab("edit")}
            >
              Editar
            </s-button>
            <s-button
              variant={tab === "preview" ? "primary" : "secondary"}
              onClick={() => setTab("preview")}
            >
              Vista previa
            </s-button>

            <s-button 
            variant="tertiary"
            icon="product-add"
            onClick={() => setPickerKind("product")}>
              Producto
            </s-button>

            <s-button
              variant="tertiary"
              icon="collection-reference"
              onClick={() => setPickerKind("collection")}
            >
              Colección
            </s-button>

          </s-stack>

          {tab === "edit" ? (
            <BlogEditor
              initialDoc={draft.blocknoteDoc}
              onChange={handleDocChange}
              editorRef={editorRef}
              onOpenProductPicker={() => setPickerKind("product")}
              onOpenCollectionPicker={() => setPickerKind("collection")}
            />
          ) : (
            <div
              className="article-editor-content"
              dangerouslySetInnerHTML={{
                __html: previewHtml || "<p>Sin vista previa. Pulsa Vista previa.</p>",
              }}
            />
          )}
        </s-stack>
      </s-section>

      {pickerKind ? (
        <s-section heading={pickerKind === "product" ? "Insertar producto" : "Insertar colección"}>
          <s-stack direction="block" gap="base">
            <input
              type="search"
              placeholder="Buscar…"
              value={searchQuery}
              onChange={(e) => {
                const q = e.target.value;
                setSearchQuery(q);
                runSearch(pickerKind, q);
              }}
            />
            <s-button
              variant="secondary"
              onClick={() => runSearch(pickerKind, searchQuery)}
            >
              Buscar
            </s-button>
            {searchResults?.map((item) => (
              <s-button
                key={item.id}
                variant="tertiary"
                onClick={() => insertFromPicker(item, pickerKind)}
              >
                {item.title}
              </s-button>
            ))}
            <s-button variant="tertiary" onClick={() => setPickerKind(null)}>
              Cancelar
            </s-button>
          </s-stack>
        </s-section>
      ) : null}
    </s-page>
  );
}

export default function ArticleEditorRoute() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <s-page heading="Cargando editor…">
        <s-section>
          <s-paragraph>Cargando…</s-paragraph>
        </s-section>
      </s-page>
    );
  }
  return <EditorPage />;
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
