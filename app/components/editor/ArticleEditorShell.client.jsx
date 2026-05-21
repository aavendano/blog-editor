import { useCallback, useRef, useState } from "react";
import { useFetcher } from "react-router";
import {
  getSearchIntentForKind,
} from "../../lib/blocknote/custom-block-catalog";
import { excerptFromArticle } from "../../lib/shopify/article-excerpt.js";
import { BlogEditor, insertEmbedBlock } from "./BlogEditor.client";
import { CustomBlocksSidebar } from "./CustomBlocksSidebar";

const PRODUCT_ROW_MIN = 2;
const PRODUCT_ROW_MAX = 4;

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
 * @param {Array<{ id: string; title: string; handle?: string; featuredImage?: { url?: string }; priceRangeV2?: { minVariantPrice?: { amount: string; currencyCode: string } } }>} items
 * @returns {Record<string, string>}
 */
function productRowPropsFromPickerItems(items) {
  const props = {};
  for (const slot of [1, 2, 3, 4]) {
    props[`product${slot}Gid`] = "";
    props[`product${slot}Title`] = "";
    props[`product${slot}ImageUrl`] = "";
    props[`product${slot}Handle`] = "";
    props[`product${slot}PriceLabel`] = "";
  }

  items.slice(0, PRODUCT_ROW_MAX).forEach((item, index) => {
    const slot = index + 1;
    const productProps = productPropsFromPickerItem(item, "card");
    props[`product${slot}Gid`] = productProps.productGid;
    props[`product${slot}Title`] = productProps.productTitle;
    props[`product${slot}ImageUrl`] = productProps.productImageUrl;
    props[`product${slot}Handle`] = productProps.productHandle;
    props[`product${slot}PriceLabel`] = productProps.productPriceLabel;
  });

  return props;
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
  const [selectedRowProducts, setSelectedRowProducts] = useState([]);

  const runSearch = useCallback(
    (kind, query) => {
      const fd = new FormData();
      fd.set("intent", getSearchIntentForKind(kind));
      fd.set("query", query);
      searchFetcher.submit(fd, { method: "post" });
    },
    [searchFetcher],
  );

  const clearPicker = useCallback(() => {
    setPickerKind(null);
    setSearchQuery("");
    setSelectedRowProducts([]);
  }, []);

  const insertSingleFromPicker = useCallback((item, kind) => {
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
    } else if (kind === "productRow") {
      return;
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
    clearPicker();
  }, [clearPicker]);

  const insertProductRow = useCallback(() => {
    const editor = editorRef.current;
    if (!editor) return;
    if (
      selectedRowProducts.length < PRODUCT_ROW_MIN ||
      selectedRowProducts.length > PRODUCT_ROW_MAX
    ) {
      return;
    }

    insertEmbedBlock(
      editor,
      "productRow",
      productRowPropsFromPickerItems(selectedRowProducts),
    );
    clearPicker();
  }, [clearPicker, selectedRowProducts]);

  const searchResults =
    pickerKind === "product" ||
    pickerKind === "productHorizontal" ||
    pickerKind === "productRow"
      ? searchFetcher.data?.products
      : pickerKind === "article"
        ? searchFetcher.data?.articles
        : pickerKind === "collection"
          ? searchFetcher.data?.collections
          : null;

  const handleSelectBlock = useCallback((kind) => {
    setPickerKind(kind);
    setSearchQuery("");
    setSelectedRowProducts([]);
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

  const handlePickItem = useCallback(
    (item) => {
      if (!pickerKind) return;
      if (pickerKind !== "productRow") {
        insertSingleFromPicker(item, pickerKind);
        return;
      }

      setSelectedRowProducts((current) => {
        if (current.some((product) => product.id === item.id)) return current;
        if (current.length >= PRODUCT_ROW_MAX) return current;
        return [...current, item];
      });
    },
    [insertSingleFromPicker, pickerKind],
  );

  const removeRowProduct = useCallback((itemId) => {
    setSelectedRowProducts((current) =>
      current.filter((item) => item.id !== itemId),
    );
  }, []);

  return (
    <div className="article-editor-layout">
      <aside className="article-editor-sidebar" aria-label="Bloques">
        <CustomBlocksSidebar
          activePicker={pickerKind}
          searchQuery={searchQuery}
          searchResults={searchResults}
          onSelectBlock={handleSelectBlock}
          onCancelPicker={clearPicker}
          onSearchQueryChange={handleSearchQueryChange}
          onRunSearch={() => pickerKind && runSearch(pickerKind, searchQuery)}
          onPickItem={handlePickItem}
          multiSelectConfig={
            pickerKind === "productRow"
              ? {
                  selectedItems: selectedRowProducts,
                  minSelection: PRODUCT_ROW_MIN,
                  maxSelection: PRODUCT_ROW_MAX,
                  onRemoveItem: removeRowProduct,
                  onConfirmSelection: insertProductRow,
                }
              : null
          }
        />
      </aside>
      <main className="article-editor-main article-editor-content">
        <BlogEditor
          initialDoc={initialDoc}
          onChange={onChange}
          editorRef={editorRef}
          onOpenPicker={handleSelectBlock}
        />
      </main>
    </div>
  );
}
