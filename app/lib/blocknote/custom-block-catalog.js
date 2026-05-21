/** @typedef {"product" | "productHorizontal" | "article" | "collection" | "tableOfContents" | "highlightNotification"} EmbedKind */

/**
 * @typedef {Object} CustomEmbedBlockDef
 * @property {EmbedKind} kind
 * @property {string} title
 * @property {string} description
 * @property {"searchProducts" | "searchCollections" | "searchArticles"} [searchIntent]
 * @property {"picker" | "direct"} [insertMode]
 * @property {string} polarisIcon
 * @property {string[]} slashAliases
 * @property {"RiShoppingBag3Line" | "RiStackLine" | "RiArticleLine" | "RiListOrdered" | "RiAlarmWarningLine"} reactIcon
 */

/** @type {CustomEmbedBlockDef[]} */
export const CUSTOM_EMBED_BLOCKS = [
  {
    kind: "product",
    title: "Producto",
    description: "Insertar producto del catálogo",
    searchIntent: "searchProducts",
    polarisIcon: "product-add",
    slashAliases: ["product", "producto", "shopify"],
    reactIcon: "RiShoppingBag3Line",
  },
  {
    kind: "productHorizontal",
    title: "Producto horizontal",
    description: "Insertar producto del catálogo en una fila",
    searchIntent: "searchProducts",
    polarisIcon: "product-add",
    slashAliases: ["productHorizontal", "productoHorizontal", "shopify"],
    reactIcon: "RiShoppingBag3Line",
  },
  {
    kind: "article",
    title: "Artículo",
    description: "Insertar artículo de blog de Shopify",
    searchIntent: "searchArticles",
    polarisIcon: "blog",
    slashAliases: ["article", "articulo", "blog", "post"],
    reactIcon: "RiArticleLine",
  },
  {
    kind: "collection",
    title: "Colección",
    description: "Insertar colección del catálogo",
    searchIntent: "searchCollections",
    polarisIcon: "collection-reference",
    slashAliases: ["collection", "coleccion", "colección"],
    reactIcon: "RiStackLine",
  },
  {
    kind: "tableOfContents",
    title: "Tabla de contenido",
    description: "Insertar índice automático de encabezados H2-H4",
    insertMode: "direct",
    polarisIcon: "list-bulleted",
    slashAliases: ["toc", "tablaContenido", "indice", "indiceContenido"],
    reactIcon: "RiListOrdered",
  },
  {
    kind: "highlightNotification",
    title: "Texto de resaltado",
    description: "Bloque notification de Bulma con variantes de color",
    insertMode: "direct",
    polarisIcon: "alert-bubble",
    slashAliases: ["resaltado", "highlight", "notification", "callout"],
    reactIcon: "RiAlarmWarningLine",
  },
];

/**
 * @param {EmbedKind} kind
 * @returns {CustomEmbedBlockDef | undefined}
 */
export function getBlockByKind(kind) {
  return CUSTOM_EMBED_BLOCKS.find((b) => b.kind === kind);
}

/**
 * @param {EmbedKind} kind
 * @returns {"searchProducts" | "searchCollections" | "searchArticles"}
 */
export function getSearchIntentForKind(kind) {
  const block = getBlockByKind(kind);
  if (!block || !block.searchIntent) {
    throw new Error(`Unknown embed kind: ${kind}`);
  }
  return block.searchIntent;
}

/**
 * @param {EmbedKind} kind
 * @returns {boolean}
 */
export function isDirectInsertKind(kind) {
  const block = getBlockByKind(kind);
  return block?.insertMode === "direct";
}
