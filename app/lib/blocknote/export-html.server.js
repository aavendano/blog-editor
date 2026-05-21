import { enrichBlocknoteDoc } from "./enrich-embeds.server";
import { getServerBlockNoteEditor } from "./server-editor.server";
import { blocknoteSchema } from "./schema";
import { sanitizeInitialDoc } from "./sanitize-initial-doc";

/**
 * @param {unknown} blocknoteDoc
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function exportArticleHtml(blocknoteDoc, admin) {
  const schemaBlockTypes = Object.keys(blocknoteSchema.blockSpecs);
  const { blocks: sanitizedBlocks } = sanitizeInitialDoc(
    blocknoteDoc,
    schemaBlockTypes,
  );
  const blocks = await enrichBlocknoteDoc(
    sanitizedBlocks ?? blocknoteDoc,
    admin,
  );
  const editor = getServerBlockNoteEditor();
  return await editor.blocksToHTMLLossy(blocks);
}
