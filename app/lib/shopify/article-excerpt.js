export const ARTICLE_EXCERPT_MAX_LENGTH = 250;

/**
 * @param {string} html
 */
export function stripHtmlToPlainText(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {string} text
 * @param {number} [max]
 */
export function truncateExcerpt(text, max = ARTICLE_EXCERPT_MAX_LENGTH) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

/**
 * @param {{ summary?: string | null; body?: string | null }} article
 */
export function excerptFromArticle(article) {
  const raw = article.summary?.trim() || article.body || "";
  return truncateExcerpt(stripHtmlToPlainText(raw));
}
