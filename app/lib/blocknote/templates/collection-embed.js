/**
 * @param {object} collection
 * @param {{ layout?: string; collectionGid?: string }} props
 */
export function collectionEmbedToHtml(collection, props = {}) {
  const layout = props.layout || "card";
  const title = collection?.title || "Collection";
  const handle = collection?.handle || "";
  const imageUrl = collection?.image?.url || "";
  const gid = collection?.id || props.collectionGid || "";

  if (layout === "row") {
    return `<div class="columns is-vcentered is-mobile collection-embed" data-collection-gid="${escapeAttr(gid)}">
  <div class="column is-narrow">${imageUrl ? `<figure class="image is-64x64"><img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(title)}" /></figure>` : ""}</div>
  <div class="column">
    <p class="title is-5">${escapeHtml(title)}</p>
    ${handle ? `<a href="/collections/${escapeAttr(handle)}" class="button is-link is-small">View collection</a>` : ""}
  </div>
</div>`;
  }

  return `<div class="card collection-embed" data-collection-gid="${escapeAttr(gid)}">
  ${imageUrl ? `<div class="card-image"><figure class="image is-4by3"><img src="${escapeAttr(imageUrl)}" alt="${escapeAttr(title)}" /></figure></div>` : ""}
  <div class="card-content">
    <p class="title is-5">${escapeHtml(title)}</p>
    ${handle ? `<a href="/collections/${escapeAttr(handle)}" class="button is-link is-small">View collection</a>` : ""}
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
