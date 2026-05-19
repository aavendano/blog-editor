import { enrichBlocknoteDoc } from "./enrich-embeds.server";
import { getServerBlockNoteEditor } from "./server-editor.server";

/**
 * @param {unknown} blocknoteDoc
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function exportArticleHtml(blocknoteDoc, admin) {
  const blocks = await enrichBlocknoteDoc(blocknoteDoc, admin);
  const editor = getServerBlockNoteEditor();
  return await editor.blocksToHTMLLossy(blocks);
}
