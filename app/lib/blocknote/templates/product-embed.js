/**
 * @param {object} product
 * @param {{ layout?: string; productGid?: string }} props
 */
export function productEmbedToHtml(product, props = {}) {
  const layout = props.layout || "card";
  const title = product?.title || "Product";
  const handle = product?.handle || "";
  const imageUrl = product?.featuredImage?.url || "";
  const price = product?.priceRangeV2?.minVariantPrice;
  const priceLabel = price
    ? `${price.amount} ${price.currencyCode}`
    : "";
  const gid = product?.id || props.productGid || "";

  if (layout === "row") {
    return `<div class="columns is-vcentered is-mobile product-embed" data-product-gid="${escapeAttr(gid)}">
  <div class="column is-narrow">${imageUrl ? `<figure class="image is-64x64"><img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(title)}" /></figure>` : ""}</div>
  <div class="column">
    <p class="title is-5">${escapeHtml(title)}</p>
    ${priceLabel ? `<p class="subtitle is-6">${escapeHtml(priceLabel)}</p>` : ""}
  </div>
</div>`;
  }

  return `<div class="card product-embed" data-product-gid="${escapeAttr(gid)}">
  ${imageUrl ? `<div class="card-image"><figure class="image is-4by3"><img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(title)}" /></figure></div>` : ""}
  <div class="card-content">
    <p class="title is-5">${escapeHtml(title)}</p>
    ${priceLabel ? `<p class="subtitle is-6">${escapeHtml(priceLabel)}</p>` : ""}
    ${handle ? `<a href="/products/${escapeAttr(handle)}" class="button is-link is-small">View product</a>` : ""}
  </div>
</div>`;
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
