import { useCallback, useRef, useState } from "react";
import { useFetcher } from "react-router";
import {
  getSearchIntentForKind,
} from "../../lib/blocknote/custom-block-catalog";
import { excerptFromArticle } from "../../lib/shopify/article-excerpt.js";
import { BlogEditor, insertEmbedBlock } from "./BlogEditor.client";
import { CustomBlocksSidebar } from "./CustomBlocksSidebar";

/**
 * @param {{
 *   id: string;
 *   title: string;
 *   handle?: string;
 *   summary?: string;
 *   image?: { url?: string };
 *   blog?: { handle?: string; title?: string };
 * }} item
 * @returns {Record<string, string>}
 */
function articlePropsFromPickerItem(item) {
  return {
    articleGid: item.id,
    articleTitle: item.title,
    articleHandle: item.handle || "",
    articleImageUrl: item.image?.url || "",
    blogHandle: item.blog?.handle || "",
    blogTitle: item.blog?.title || "",
    articleExcerpt: excerptFromArticle(item),
  };
}

/**
 * @param {{ id: string; title: string; handle?: string; featuredImage?: { url?: string }; priceRangeV2?: { minVariantPrice?: { amount: string; currencyCode: string } } }} item
 * @param {string} layout
 * @returns {Record<string, string>}
 */
function productPropsFromPickerItem(item, layout) {
  const price = item.priceRangeV2?.minVariantPrice;
  const productPriceLabel = price
    ? `${price.amount} ${price.currencyCode}`
    : "";
  return {
    productGid: item.id,
    productTitle: item.title,
    productImageUrl: item.featuredImage?.url || "",
    productHandle: item.handle || "",
    productPriceLabel,
    layout,
  };
}

/**
 * @param {{
 *   initialDoc: unknown;
 *   onChange: (doc: unknown) => void;
 * }} props
 */
export function ArticleEditorShell({ initialDoc, onChange }) {
  const searchFetcher = useFetcher();
  const editorRef = useRef(null);
  const [pickerKind, setPickerKind] = useState(
    /** @type {import("../../lib/blocknote/custom-block-catalog.js").EmbedKind | null} */ (
      null
    ),
  );
  const [searchQuery, setSearchQuery] = useState("");

  const runSearch = useCallback(
    (kind, query) => {
      const fd = new FormData();
      fd.set("intent", getSearchIntentForKind(kind));
      fd.set("query", query);
      searchFetcher.submit(fd, { method: "post" });
    },
    [searchFetcher],
  );

  const insertFromPicker = useCallback((item, kind) => {
    const editor = editorRef.current;
    if (!editor) return;

    if (kind === "product") {
      insertEmbedBlock(
        editor,
        "product",
        productPropsFromPickerItem(item, "card"),
      );
    } else if (kind === "productHorizontal") {
      insertEmbedBlock(
        editor,
        "productHorizontal",
        productPropsFromPickerItem(item, "row"),
      );
    } else if (kind === "article") {
      insertEmbedBlock(editor, "article", articlePropsFromPickerItem(item));
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
  }, []);

  const searchResults =
    pickerKind === "product" || pickerKind === "productHorizontal"
      ? searchFetcher.data?.products
      : pickerKind === "article"
        ? searchFetcher.data?.articles
        : pickerKind === "collection"
          ? searchFetcher.data?.collections
          : null;

  const handleSelectBlock = useCallback((kind) => {
    setPickerKind(kind);
    setSearchQuery("");
  }, []);

  const handleSearchQueryChange = useCallback(
    (query) => {
      setSearchQuery(query);
      if (pickerKind) {
        runSearch(pickerKind, query);
      }
    },
    [pickerKind, runSearch],
  );

  return (
    <div className="article-editor-layout">
      <aside className="article-editor-sidebar" aria-label="Bloques">
        <CustomBlocksSidebar
          activePicker={pickerKind}
          searchQuery={searchQuery}
          searchResults={searchResults}
          onSelectBlock={handleSelectBlock}
          onCancelPicker={() => {
            setPickerKind(null);
            setSearchQuery("");
          }}
          onSearchQueryChange={handleSearchQueryChange}
          onRunSearch={() => pickerKind && runSearch(pickerKind, searchQuery)}
          onPickItem={(item) => pickerKind && insertFromPicker(item, pickerKind)}
        />
      </aside>
      <main className="article-editor-main article-editor-content">
        <BlogEditor
          initialDoc={initialDoc}
          onChange={onChange}
          editorRef={editorRef}
          onOpenPicker={(kind) => setPickerKind(kind)}
        />
      </main>
    </div>
  );
}
