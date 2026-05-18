import { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useFetcher,
  useNavigate,
} from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticateAdmin } from "../lib/shopify-auth.server";
import { assertAllowedEmail } from "../lib/auth.server";
import { listBlogs, getBlogArticles } from "../lib/shopify/blogs.server";
import {
  listDraftsByShop,
  createDraft,
  getDraftByShopifyArticleGid,
} from "../models/article-draft.server";
import { preserveSearchParamsFromRequest } from "../lib/preserve-search-params";
import { useAppPath } from "../lib/use-app-path";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  const blogs = await listBlogs(admin);
  const drafts = await listDraftsByShop(session.shop);

  const blogTitles = Object.fromEntries(blogs.map((b) => [b.id, b.title]));

  return { blogs, drafts, blogTitles };
};

export const action = async ({ request }) => {
  const { admin, session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "createDraft") {
    const blogGid = formData.get("blogGid");
    const title = formData.get("title") || "Sin título";
    if (!blogGid || typeof blogGid !== "string") {
      return { error: "Selecciona un blog" };
    }
    const draft = await createDraft({
      shop: session.shop,
      shopifyBlogGid: blogGid,
      title: String(title),
    });
    return redirect(
      preserveSearchParamsFromRequest(request, `/app/articles/${draft.id}`),
    );
  }

  if (intent === "linkArticle") {
    const blogGid = formData.get("blogGid");
    const articleGid = formData.get("articleGid");
    const title = formData.get("title");
    if (
      !blogGid ||
      !articleGid ||
      typeof blogGid !== "string" ||
      typeof articleGid !== "string"
    ) {
      return { error: "Selecciona blog y artículo" };
    }

    const existing = await getDraftByShopifyArticleGid(articleGid, session.shop);
    if (existing) {
      return redirect(
        preserveSearchParamsFromRequest(request, `/app/articles/${existing.id}`),
      );
    }

    const draft = await createDraft({
      shop: session.shop,
      shopifyBlogGid: blogGid,
      shopifyArticleGid: articleGid,
      title: String(title || "Artículo enlazado"),
    });
    return redirect(
      preserveSearchParamsFromRequest(request, `/app/articles/${draft.id}`),
    );
  }

  if (intent === "loadArticles") {
    const blogGid = formData.get("blogGid");
    if (!blogGid || typeof blogGid !== "string") {
      return { articles: [] };
    }
    const blog = await getBlogArticles(admin, blogGid);
    return { articles: blog?.articles?.nodes ?? [] };
  }

  return { error: "Acción desconocida" };
};

function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString();
}

function ArticleEditLink({ draftId }) {
  const to = useAppPath(`/app/articles/${draftId}`);
  return <Link to={to}>Editar</Link>;
}

export default function ArticlesIndex() {
  const { blogs, drafts, blogTitles } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const newArticlePath = useAppPath("/app/articles/new");
  const [linkBlogId, setLinkBlogId] = useState("");
  const [showLinkModal, setShowLinkModal] = useState(false);

  const articles =
    fetcher.data?.articles ??
    (fetcher.formData?.get("intent") === "loadArticles" ? [] : null);

  const loadArticlesForBlog = (blogGid) => {
    setLinkBlogId(blogGid);
    const fd = new FormData();
    fd.set("intent", "loadArticles");
    fd.set("blogGid", blogGid);
    fetcher.submit(fd, { method: "post" });
  };

  return (
    <s-page heading="Artículos del blog">
      <s-button
        slot="primary-action"
        variant="primary"
        onClick={() => navigate(newArticlePath)}
      >
        Nuevo artículo
      </s-button>
      <s-button slot="secondary-actions" onClick={() => setShowLinkModal(true)}>
        Enlazar existente
      </s-button>

      <s-section heading="Borradores y artículos">
        {drafts.length === 0 ? (
          <s-paragraph>No hay artículos. Crea uno nuevo o enlaza uno de Shopify.</s-paragraph>
        ) : (
          <s-box padding="base" borderWidth="base" borderRadius="base">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px" }}>Título</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Blog</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Estado</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Actualizado</th>
                  <th style={{ textAlign: "left", padding: "8px" }}></th>
                </tr>
              </thead>
              <tbody>
                {drafts.map((draft) => (
                  <tr key={draft.id}>
                    <td style={{ padding: "8px" }}>{draft.title}</td>
                    <td style={{ padding: "8px" }}>
                      {blogTitles[draft.shopifyBlogGid] || draft.shopifyBlogGid}
                    </td>
                    <td style={{ padding: "8px" }}>
                      <s-badge
                        tone={draft.status === "published" ? "success" : "info"}
                      >
                        {draft.status === "published" ? "Publicado" : "Borrador"}
                      </s-badge>
                    </td>
                    <td style={{ padding: "8px" }}>
                      {formatDate(draft.updatedAt)}
                    </td>
                    <td style={{ padding: "8px" }}>
                      <ArticleEditLink draftId={draft.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </s-box>
        )}
      </s-section>

      {showLinkModal ? (
        <s-section heading="Enlazar artículo de Shopify">
          <s-stack direction="block" gap="base">
            <label>
              Blog
              <select
                value={linkBlogId}
                onChange={(e) => {
                  const id = e.target.value;
                  setLinkBlogId(id);
                  if (id) loadArticlesForBlog(id);
                }}
              >
                <option value="">Seleccionar blog…</option>
                {blogs.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.title}
                  </option>
                ))}
              </select>
            </label>

            {articles && linkBlogId ? (
              <s-stack direction="block" gap="base">
                {articles.length === 0 ? (
                  <s-paragraph>No hay artículos en este blog.</s-paragraph>
                ) : (
                  articles.map((article) => (
                    <Form key={article.id} method="post">
                      <input type="hidden" name="intent" value="linkArticle" />
                      <input type="hidden" name="blogGid" value={linkBlogId} />
                      <input type="hidden" name="articleGid" value={article.id} />
                      <input type="hidden" name="title" value={article.title} />
                      <s-button type="submit" variant="secondary">
                        {article.title}
                      </s-button>
                    </Form>
                  ))
                )}
              </s-stack>
            ) : null}

            <s-button variant="tertiary" onClick={() => setShowLinkModal(false)}>
              Cerrar
            </s-button>
          </s-stack>
        </s-section>
      ) : null}
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
