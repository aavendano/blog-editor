import {
  CUSTOM_EMBED_BLOCKS,
  getBlockByKind,
} from "../../lib/blocknote/custom-block-catalog";

/**
 * @param {{
 *   activePicker: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind | null;
 *   searchQuery: string;
 *   searchResults:
 *     | Array<{ id: string; title: string; handle?: string; featuredImage?: { url?: string }; priceRangeV2?: { minVariantPrice?: { amount: string; currencyCode: string } } }>
 *     | null
 *     | undefined;
 *   onSelectBlock: (kind: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind) => void;
 *   onCancelPicker: () => void;
 *   onSearchQueryChange: (query: string) => void;
 *   onRunSearch: () => void;
 *   onPickItem: (item: { id: string; title: string }) => void;
 *   multiSelectConfig?: {
 *     selectedItems: Array<{ id: string; title: string }>;
 *     minSelection: number;
 *     maxSelection: number;
 *     onRemoveItem: (id: string) => void;
 *     onConfirmSelection: () => void;
 *   } | null;
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
  multiSelectConfig = null,
}) {
  const activeBlock = activePicker ? getBlockByKind(activePicker) : null;
  const selectedItems = multiSelectConfig?.selectedItems || [];
  const selectedIds = new Set(selectedItems.map((item) => item.id));
  const maxSelection = multiSelectConfig?.maxSelection || 0;
  const minSelection = multiSelectConfig?.minSelection || 0;
  const canConfirmSelection =
    selectedItems.length >= minSelection && selectedItems.length <= maxSelection;
  const hasReachedMax = multiSelectConfig
    ? selectedItems.length >= maxSelection
    : false;

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
        {multiSelectConfig ? (
          <s-stack direction="block" gap="tight">
            <s-text type="strong">
              Seleccionados ({selectedItems.length}/{maxSelection})
            </s-text>
            {selectedItems.map((item) => (
              <s-stack key={item.id} direction="inline" gap="tight">
                <s-text>{item.title}</s-text>
                <s-button
                  variant="tertiary"
                  onClick={() => multiSelectConfig.onRemoveItem(item.id)}
                >
                  Quitar
                </s-button>
              </s-stack>
            ))}
            <s-button
              variant="primary"
              disabled={!canConfirmSelection}
              onClick={multiSelectConfig.onConfirmSelection}
            >
              Insertar fila
            </s-button>
          </s-stack>
        ) : null}
        {searchResults?.map((item) => (
          <s-button
            key={item.id}
            variant="tertiary"
            disabled={Boolean(
              multiSelectConfig &&
                (selectedIds.has(item.id) || (hasReachedMax && !selectedIds.has(item.id))),
            )}
            onClick={() => onPickItem(item)}
          >
            {item.title}
            {multiSelectConfig && selectedIds.has(item.id) ? " (añadido)" : ""}
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
