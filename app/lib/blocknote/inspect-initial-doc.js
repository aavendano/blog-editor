/** @param {unknown} blocks */
function collectBlockTypes(blocks) {
  /** @type {string[]} */
  const types = [];
  if (!Array.isArray(blocks)) return types;

  for (const block of blocks) {
    if (!block || typeof block !== "object") continue;
    const type =
      typeof /** @type {{ type?: string }} */ (block).type === "string"
        ? /** @type {{ type: string }} */ (block).type
        : "(missing-type)";
    types.push(type);
    const children = /** @type {{ children?: unknown }} */ (block).children;
    if (Array.isArray(children)) {
      types.push(...collectBlockTypes(children));
    }
  }
  return types;
}

/**
 * @param {unknown} initialDoc
 * @param {string[]} schemaBlockTypes
 */
export function inspectInitialDoc(initialDoc, schemaBlockTypes) {
  const isArray = Array.isArray(initialDoc);
  const blockTypes = isArray ? collectBlockTypes(initialDoc) : [];
  const typeCounts = blockTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, /** @type {Record<string, number>} */ ({}));

  const unknownTypes = [
    ...new Set(
      blockTypes.filter((type) => !schemaBlockTypes.includes(type)),
    ),
  ];

  return {
    isArray,
    topLevelCount: isArray ? initialDoc.length : 0,
    typeCounts,
    hasProductRow: blockTypes.includes("productRow"),
    unknownTypes,
    productRowCount: typeCounts.productRow || 0,
  };
}
