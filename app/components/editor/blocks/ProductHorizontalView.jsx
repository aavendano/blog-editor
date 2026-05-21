/**
 * @param {{ block: { props: Record<string, string> } }} args
 */
export function propsFromBlock(block) {
  const p = block.props;
  return {
    layout: p.layout || "row",
    gid: p.productGid || "",
    title: p.productTitle || "Product",
    imageUrl: p.productImageUrl || "",
    priceLabel: p.productPriceLabel || "",
    handle: p.productHandle || "",
  };
}

/**
 * @param {{
 *   layout?: string;
 *   gid?: string;
 *   title?: string;
 *   imageUrl?: string;
 *   priceLabel?: string;
 *   handle?: string;
 *   contentEditable?: boolean;
 * }} props
 */
export function ProductHorizontalView({
  gid = "",
  title = "Product",
  imageUrl = "",
  priceLabel = "",
  handle = "",
  contentEditable = false,
}) {
  return (
    <section className="b-section">
      <article
        className="b-card b-card-horizontal product-horizontal-embed"
        data-product-gid={gid}
        contentEditable={contentEditable}
      >
        {imageUrl ? (
          <div className="b-card-image">
            <figure className="b-image b-is-4by3">
              <img src={imageUrl} alt={title} loading="lazy" decoding="async" />
            </figure>
          </div>
        ) : null}
        <div className="b-card-content">
          <p className="b-title b-is-5">{title}</p>
          {priceLabel ? <p className="b-subtitle b-is-6">{priceLabel}</p> : null}
        </div>
        {handle ? (
          <footer className="b-card-footer">
            <div className="b-card-footer-item">
              <a
                href={`/products/${handle}`}
                className="b-button b-is-link b-is-small"
              >
                View product
              </a>
            </div>
          </footer>
        ) : null}
      </article>
    </section>
  );
}
