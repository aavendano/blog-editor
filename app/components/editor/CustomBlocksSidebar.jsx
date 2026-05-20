import {
  CUSTOM_EMBED_BLOCKS,
  getBlockByKind,
} from "../../lib/blocknote/custom-block-catalog";

/**
 * @param {{
 *   activePicker: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind | null;
 *   searchQuery: string;
 *   searchResults: Array<{ id: string; title: string }> | null | undefined;
 *   onSelectBlock: (kind: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind) => void;
 *   onCancelPicker: () => void;
 *   onSearchQueryChange: (query: string) => void;
 *   onRunSearch: () => void;
 *   onPickItem: (item: { id: string; title: string }) => void;
 * }} props
 */
export function CustomBlocksSidebar({
  activePicker,
  searchQuery,
  searchResults,
  onSelectBlock,
  onCancelPicker,
  onSearchQueryChange,
  onRunSearch,
  onPickItem,
}) {
  const activeBlock = activePicker ? getBlockByKind(activePicker) : null;

  if (activePicker && activeBlock) {
    return (
      <s-stack direction="block" gap="base">
        <s-text type="strong">{activeBlock.title}</s-text>
        <s-paragraph tone="subdued">{activeBlock.description}</s-paragraph>
        <input
          type="search"
          placeholder="Buscar…"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
        <s-button variant="secondary" onClick={onRunSearch}>
          Buscar
        </s-button>
        {searchResults?.map((item) => (
          <s-button
            key={item.id}
            variant="tertiary"
            onClick={() => onPickItem(item)}
          >
            {item.title}
          </s-button>
        ))}
        <s-button variant="tertiary" onClick={onCancelPicker}>
          Cancelar
        </s-button>
      </s-stack>
    );
  }

  return (
    <s-stack direction="block" gap="base">
      <s-text type="strong">Bloques</s-text>
      {CUSTOM_EMBED_BLOCKS.map((block) => (
        <s-button
          key={block.kind}
          variant="tertiary"
          icon={block.polarisIcon}
          onClick={() => onSelectBlock(block.kind)}
        >
          {block.title}
        </s-button>
      ))}
    </s-stack>
  );
}
