const HEADING_MIN_LEVEL = 2;
const HEADING_MAX_LEVEL = 4;
const MAX_TOC_ITEMS = 24;

/**
 * @param {unknown} value
 * @returns {string}
 */
function textFromInline(value) {
  if (typeof value === "string") {
    return value.trim();
  }

  if (!Array.isArray(value)) return "";

  return value
    .map((node) => {
      if (!node || typeof node !== "object") return "";
      const text = node.text;
      return typeof text === "string" ? text : "";
    })
    .join("")
    .trim();
}

/**
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  const base = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return base || "seccion";
}

/**
 * @param {unknown} levelValue
 * @returns {number}
 */
function parseHeadingLevel(levelValue) {
  const parsed = Number(levelValue);
  if (!Number.isFinite(parsed)) return 1;
  return parsed;
}

/**
 * @param {Array<any>} blocks
 * @returns {Array<{ text: string; level: number; slug: string }>}
 */
function collectHeadingItems(blocks) {
  const headings = [];
  const slugCounts = new Map();

  const visit = (nodes) => {
    for (const node of nodes) {
      if (!node || typeof node !== "object") continue;

      if (node.type === "heading") {
        const level = parseHeadingLevel(node.props?.level);
        if (level >= HEADING_MIN_LEVEL && level <= HEADING_MAX_LEVEL) {
          const text = textFromInline(node.content);
          if (text) {
            const baseSlug = slugify(text);
            const count = slugCounts.get(baseSlug) || 0;
            slugCounts.set(baseSlug, count + 1);
            headings.push({
              text,
              level,
              slug: count === 0 ? baseSlug : `${baseSlug}-${count + 1}`,
            });
          }
        }
      }

      if (Array.isArray(node.children) && node.children.length > 0) {
        visit(node.children);
      }
    }
  };

  visit(blocks);
  return headings.slice(0, MAX_TOC_ITEMS);
}

/**
 * @param {unknown} documentBlocks
 * @returns {Record<string, string>}
 */
export function buildTableOfContentsProps(documentBlocks) {
  const blocks = Array.isArray(documentBlocks) ? documentBlocks : [];
  const items = collectHeadingItems(blocks);

  return {
    tocTitle: "Tabla de contenido",
    tocItems: JSON.stringify(items),
  };
}

/**
 * @param {unknown} value
 * @returns {Array<{ text: string; level: number; slug: string }>}
 */
export function parseTableOfContentsItems(value) {
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item && typeof item === "object")
      .map((item) => ({
        text: typeof item.text === "string" ? item.text : "",
        level: parseHeadingLevel(item.level),
        slug: typeof item.slug === "string" ? item.slug : "",
      }))
      .filter(
        (item) =>
          item.text &&
          item.slug &&
          item.level >= HEADING_MIN_LEVEL &&
          item.level <= HEADING_MAX_LEVEL,
      );
  } catch {
    return [];
  }
}
