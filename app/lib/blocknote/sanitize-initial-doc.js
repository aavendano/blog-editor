import { inspectInitialDoc } from "./inspect-initial-doc";

/** @type {Set<string>} */
const LEGACY_REMOVED_TYPES = new Set(["productRow"]);

/**
 * @param {Record<string, string>} props
 * @param {1 | 2 | 3 | 4} slot
 */
function productEmbedBlockFromRowSlot(props, slot) {
  const suffix = String(slot);
  const gid = props[`product${suffix}Gid`] || "";
  const title = props[`product${suffix}Title`] || "";
  const handle = props[`product${suffix}Handle`] || "";
  if (!gid && !handle && !title) return null;

  return {
    type: "productEmbed",
    props: {
      productGid: gid,
      layout: "card",
      productTitle: title,
      productImageUrl: props[`product${suffix}ImageUrl`] || "",
      productHandle: handle,
      productPriceLabel: props[`product${suffix}PriceLabel`] || "",
    },
  };
}

/**
 * @param {{ props?: Record<string, string> }} block
 * @returns {import("@blocknote/core").PartialBlock[]}
 */
function migrateProductRowBlock(block) {
  const props = block.props || {};
  const embeds = /** @type {Array<1 | 2 | 3 | 4>} */ ([1, 2, 3, 4])
    .map((slot) => productEmbedBlockFromRowSlot(props, slot))
    .filter(Boolean);

  if (embeds.length === 0) {
    return [{ type: "paragraph", content: "" }];
  }
  return embeds;
}

/**
 * @param {unknown[]} blocks
 * @param {string[]} allowedTypes
 * @returns {import("@blocknote/core").PartialBlock[]}
 */
function sanitizeBlocks(blocks, allowedTypes) {
  /** @type {import("@blocknote/core").PartialBlock[]} */
  const result = [];

  for (const block of blocks) {
    if (!block || typeof block !== "object") continue;
    const typed = /** @type {{ type?: string; children?: unknown[]; props?: Record<string, string> }} */ (
      block
    );
    const type = typed.type;

    if (type && LEGACY_REMOVED_TYPES.has(type)) {
      if (type === "productRow") {
        result.push(...migrateProductRowBlock(typed));
      } else {
        result.push({ type: "paragraph", content: "" });
      }
      continue;
    }

    if (typeof type === "string" && !allowedTypes.includes(type)) {
      result.push({ type: "paragraph", content: "" });
      continue;
    }

    /** @type {import("@blocknote/core").PartialBlock} */
    const next = { ...typed };
    if (Array.isArray(typed.children)) {
      next.children = sanitizeBlocks(typed.children, allowedTypes);
    }
    result.push(next);
  }

  return result;
}

/**
 * @param {unknown} initialDoc
 * @param {string[]} schemaBlockTypes
 */
export function sanitizeInitialDoc(initialDoc, schemaBlockTypes) {
  const before = inspectInitialDoc(initialDoc, schemaBlockTypes);
  if (!Array.isArray(initialDoc)) {
    return { blocks: undefined, before, after: before };
  }

  const blocks = sanitizeBlocks(initialDoc, schemaBlockTypes);
  const after = inspectInitialDoc(blocks, schemaBlockTypes);

  return {
    blocks,
    before,
    after,
    migratedProductRowCount: before.productRowCount,
  };
}
