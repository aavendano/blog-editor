import { getProduct, getCollection } from "../shopify/catalog.server";
import { productEmbedToHtml } from "./templates/product-embed";
import { collectionEmbedToHtml } from "./templates/collection-embed";

/**
 * @param {unknown} blocknoteDoc
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function exportArticleHtml(blocknoteDoc, admin) {
  const blocks = Array.isArray(blocknoteDoc) ? blocknoteDoc : [];
  const parts = [];
  for (const block of blocks) {
    parts.push(await blockToHtml(block, admin));
  }
  return parts.filter(Boolean).join("\n");
}

/**
 * @param {Record<string, unknown>} block
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
async function blockToHtml(block, admin) {
  const type = block.type;
  const props = block.props || {};

  switch (type) {
    case "productEmbed": {
      const gid = props.productGid;
      if (!gid) return productEmbedToHtml(null, props);
      try {
        const product = await getProduct(admin, gid);
        return productEmbedToHtml(product, props);
      } catch {
        return productEmbedToHtml(
          {
            id: gid,
            title: props.productTitle || "Product",
            handle: props.productHandle || "",
            featuredImage: props.productImageUrl
              ? { url: props.productImageUrl }
              : null,
          },
          props,
        );
      }
    }
    case "collectionEmbed": {
      const gid = props.collectionGid;
      if (!gid) return collectionEmbedToHtml(null, props);
      try {
        const collection = await getCollection(admin, gid);
        return collectionEmbedToHtml(collection, props);
      } catch {
        return collectionEmbedToHtml(
          {
            id: gid,
            title: props.collectionTitle || "Collection",
            handle: props.collectionHandle || "",
            image: props.collectionImageUrl
              ? { url: props.collectionImageUrl }
              : null,
          },
          props,
        );
      }
    }
    case "heading": {
      const level = props.level || 1;
      const tag = `h${Math.min(Math.max(level, 1), 6)}`;
      return `<${tag}>${inlineToHtml(block.content)}</${tag}>`;
    }
    case "bulletListItem":
      return `<li>${inlineToHtml(block.content)}</li>`;
    case "numberedListItem":
      return `<li>${inlineToHtml(block.content)}</li>`;
    case "checkListItem": {
      const checked = props.checked ? "checked" : "";
      return `<li><input type="checkbox" disabled ${checked} /> ${inlineToHtml(block.content)}</li>`;
    }
    case "paragraph":
    default:
      return `<p>${inlineToHtml(block.content)}</p>`;
  }
}

/**
 * @param {unknown} content
 */
function inlineToHtml(content) {
  if (!content) return "";
  if (typeof content === "string") return escapeHtml(content);
  if (!Array.isArray(content)) return "";

  return content
    .map((item) => {
      if (typeof item === "string") return escapeHtml(item);
      if (item.type === "text") {
        let text = escapeHtml(item.text || "");
        if (item.styles?.bold) text = `<strong>${text}</strong>`;
        if (item.styles?.italic) text = `<em>${text}</em>`;
        if (item.styles?.underline) text = `<u>${text}</u>`;
        if (item.styles?.strike) text = `<s>${text}</s>`;
        if (item.styles?.code) text = `<code>${text}</code>`;
        if (item.styles?.textColor && item.styles.textColor !== "default") {
          text = `<span>${text}</span>`;
        }
        return text;
      }
      if (item.type === "link") {
        const href = escapeAttr(item.href || "#");
        return `<a href="${href}">${inlineToHtml(item.content)}</a>`;
      }
      return "";
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}
