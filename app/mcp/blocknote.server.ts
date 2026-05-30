import { getServerBlockNoteEditor } from "../lib/blocknote/server-editor.server";

export async function markdownToDraftContent(markdown: string) {
  const editor = getServerBlockNoteEditor();
  if (!editor) {
    throw new Error("BlockNote server editor is not available");
  }
  const blocks = await editor.tryParseMarkdownToBlocks(markdown);
  const htmlPreview = await editor.blocksToHTMLLossy(blocks);
  return { blocknoteDoc: blocks, htmlPreview };
}
