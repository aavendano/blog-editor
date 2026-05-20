import { filterSuggestionItems } from "@blocknote/core/extensions";
import { getDefaultReactSlashMenuItems } from "@blocknote/react";
import { RiArticleLine, RiShoppingBag3Line, RiStackLine } from "react-icons/ri";
import { CUSTOM_EMBED_BLOCKS } from "./custom-block-catalog";

const REACT_ICONS = {
  RiShoppingBag3Line,
  RiStackLine,
  RiArticleLine,
};

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 * @param {{
 *   onOpenPicker?: (kind: import("./custom-block-catalog.js").EmbedKind) => void;
 * }} callbacks
 * @param {string} query
 */
export function getArticleSlashMenuItems(editor, callbacks, query) {
  const shopifyItems = CUSTOM_EMBED_BLOCKS.map((block) => {
    if (!callbacks.onOpenPicker) return null;

    const Icon = REACT_ICONS[block.reactIcon];
    return {
      title: block.title,
      group: "Shopify",
      subtext: block.description,
      aliases: block.slashAliases,
      onItemClick: () => callbacks.onOpenPicker?.(block.kind),
      icon: Icon ? <Icon size={18} /> : undefined,
    };
  }).filter(Boolean);

  return filterSuggestionItems(
    [...getDefaultReactSlashMenuItems(editor), ...shopifyItems],
    query,
  );
}
