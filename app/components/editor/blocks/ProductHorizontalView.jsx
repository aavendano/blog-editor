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
      <div
        className="b-media product-horizontal-embed"
        data-product-gid={gid}
        contentEditable={contentEditable}
      >
        {imageUrl ? (
          <figure className="b-media-left">
            <p className="b-image b-is-100x100">
              <img src={imageUrl} alt={title} />
            </p>
          </figure>
        ) : null}
        <div className="b-media-content">
          <div className="b-block">
            <p className="b-title b-is-5">{title}</p>
          </div>

          {priceLabel ? (
            <div className="b-block">
              <p className="b-subtitle b-is-5">{priceLabel}</p>
            </div>
          ) : null}

          {handle ? (
            <div className="b-block">
              <a
                href={`/products/${handle}`}
                className="b-button b-is-link b-is-small"
              >
                View product
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
