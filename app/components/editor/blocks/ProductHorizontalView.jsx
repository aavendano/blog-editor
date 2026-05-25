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
      <div className="b-box">
        <article
          className="b-media product-horizontal-embed"
          data-product-gid={gid}
          contentEditable={contentEditable}
        >
          {imageUrl ? (
            <div className="b-media-left">
              <figure className="b-image b-is-150x150">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          ) : null}
          <div className="b-media-content">
            <div className="b-block">
              <p className="b-title b-is-5">{title}</p>
              {priceLabel ? (
                <p className="b-subtitle b-is-5">{priceLabel}</p>
              ) : null}
            </div>
            <div className="b-block">
              {handle ? (
                <a
                  href={`/products/${handle}`}
                  className="b-button b-is-link b-is-fullwidth"
                >
                  View product
                </a>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
