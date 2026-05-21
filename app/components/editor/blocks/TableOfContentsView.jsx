import { parseTableOfContentsItems } from "../../../lib/blocknote/table-of-contents";

/**
 * @param {{ block: { props: Record<string, string> } }} block
 */
export function propsFromBlock(block) {
  const p = block.props || {};
  return {
    title: p.tocTitle || "Tabla de contenido",
    items: parseTableOfContentsItems(p.tocItems),
  };
}

/**
 * @param {{
 *   title?: string;
 *   items?: Array<{ text: string; level: number; slug: string }>;
 *   contentEditable?: boolean;
 * }} props
 */
export function TableOfContentsView({
  title = "Tabla de contenido",
  items = [],
  contentEditable = false,
}) {
  return (
    <nav
      className="b-box table-of-contents-embed"
      contentEditable={contentEditable}
      data-toc-item-count={items.length}
    >
      <p className="b-title b-is-6">{title}</p>
      {items.length > 0 ? (
        <ol className="table-of-contents-list">
          {items.map((item, index) => (
            <li
              key={`${item.slug}-${index}`}
              className={`table-of-contents-item level-${item.level}`}
              data-toc-slug={item.slug}
            >
              <a href={`#${item.slug}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="b-text">
          Agrega encabezados H2-H4 y vuelve a insertar este bloque para generar
          el indice.
        </p>
      )}
    </nav>
  );
}
