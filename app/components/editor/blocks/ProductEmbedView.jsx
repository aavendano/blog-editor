/**
 * @param {{ block: { props: Record<string, string> } }} args
 */
export function propsFromBlock(block) {
  const p = block.props;
  return {
    layout: p.layout || "card",
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
export function ProductEmbedView({
  gid = "",
  title = "Product",
  imageUrl = "",
  priceLabel = "",
  handle = "",
  contentEditable = false,
}) { return (
    <div
      className="b-card product-embed"
      data-product-gid={gid}
      contentEditable={contentEditable}
    >
      {imageUrl ? (
        <div className="b-card-image">
          <figure className="b-image b-is-square">
            <img src={imageUrl} alt={title} />
          </figure>
        </div>
      ) : null}
      <div className="b-card-content">
        <p className="b-title b-is-5">{title}</p>
        {priceLabel ? <p className="b-subtitle b-is-6">{priceLabel}</p> : null}
        {handle ? (
          <a
            href={`/products/${handle}`}
            className="b-button b-is-link b-is-small"
          >
            View product
          </a>
        ) : null}
      </div>
    </div>
  );
}
