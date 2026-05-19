import { filterSuggestionItems } from "@blocknote/core/extensions";
import { getDefaultReactSlashMenuItems } from "@blocknote/react";
import { RiShoppingBag3Line, RiStackLine } from "react-icons/ri";

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 * @param {{
 *   onOpenProductPicker?: () => void;
 *   onOpenCollectionPicker?: () => void;
 * }} callbacks
 * @param {string} query
 */
export function getArticleSlashMenuItems(editor, callbacks, query) {
  const { onOpenProductPicker, onOpenCollectionPicker } = callbacks;
  const shopifyItems = [];

  if (onOpenProductPicker) {
    shopifyItems.push({
      title: "Producto",
      group: "Shopify",
      subtext: "Insertar producto del catálogo",
      aliases: ["product", "producto", "shopify"],
      onItemClick: onOpenProductPicker,
      icon: <RiShoppingBag3Line size={18} />,
    });
  }

  if (onOpenCollectionPicker) {
    shopifyItems.push({
      title: "Colección",
      group: "Shopify",
      subtext: "Insertar colección del catálogo",
      aliases: ["collection", "coleccion", "colección"],
      onItemClick: onOpenCollectionPicker,
      icon: <RiStackLine size={18} />,
    });
  }

  return filterSuggestionItems(
    [...getDefaultReactSlashMenuItems(editor), ...shopifyItems],
    query,
  );
}
