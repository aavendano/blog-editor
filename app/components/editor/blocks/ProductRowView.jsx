const PRODUCT_ROW_MIN = 2;
const PRODUCT_ROW_MAX = 4;

/**
 * @param {Record<string, string>} props
 * @param {1 | 2 | 3 | 4} slot
 */
function getSlotProduct(props, slot) {
  const suffix = String(slot);
  return {
    gid: props[`product${suffix}Gid`] || "",
    title: props[`product${suffix}Title`] || "",
    imageUrl: props[`product${suffix}ImageUrl`] || "",
    priceLabel: props[`product${suffix}PriceLabel`] || "",
    handle: props[`product${suffix}Handle`] || "",
  };
}

/**
 * @param {{ block: { props: Record<string, string> } }} block
 */
export function propsFromBlock(block) {
  const p = block.props || {};
  const products = /** @type {Array<1 | 2 | 3 | 4>} */ ([1, 2, 3, 4])
    .map((slot) => getSlotProduct(p, slot))
    .filter((product) => product.gid || product.handle || product.title);

  return {
    products: products.slice(0, PRODUCT_ROW_MAX),
  };
}

/**
 * @param {{
 *   products?: Array<{
 *     gid?: string;
 *     title?: string;
 *     imageUrl?: string;
 *     priceLabel?: string;
 *     handle?: string;
 *   }>;
 *   contentEditable?: boolean;
 * }} props
 */
export function ProductRowView({ products = [], contentEditable = false }) {
  const normalizedProducts = products.slice(0, PRODUCT_ROW_MAX);
  const isCarousel = normalizedProducts.length > PRODUCT_ROW_MIN;

  return (
    <section className="b-section">
      <div
        className={`product-row-embed${isCarousel ? " is-carousel" : ""}`}
        data-product-row-count={normalizedProducts.length}
        contentEditable={contentEditable}
      >
        <div className="b-columns product-row-track">
          {normalizedProducts.map((product, index) => (
            <div className="b-column">
              <article
                key={product.gid || `${product.title}-${index}`}
                className="b-card product-row-card"
                data-product-gid={product.gid || ""}
              >
                {product.imageUrl ? (
                  <div className="b-card-image">
                    <figure className="b-image b-is-1by1">
                      <img
                        src={product.imageUrl}
                        alt={product.title || "Product"}
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                      />
                    </figure>
                  </div>
                ) : null}
                <div className="b-card-content">
                  <p className="b-title b-is-6">{product.title || "Product"}</p>
                  {product.priceLabel ? (
                    <p className="b-subtitle b-is-6">{product.priceLabel}</p>
                  ) : null}
                </div>
                {product.handle ? (
                  <footer className="b-card-footer">
                    <div className="b-card-footer-item">
                      <a
                        href={`/products/${product.handle}`}
                        className="b-button b-is-link b-is-small"
                      >
                        View product
                      </a>
                    </div>
                  </footer>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
