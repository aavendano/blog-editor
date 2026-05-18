export function ProductEmbedBlock({ block }) {
  const { productTitle, productImageUrl, layout, productGid } = block.props;
  const title = productTitle || "Product";

  if (layout === "row") {
    return (
      <div
        className="columns is-vcentered is-mobile product-embed"
        data-product-gid={productGid}
        contentEditable={false}
      >
        <div className="column is-narrow">
          {productImageUrl ? (
            <figure className="image is-64x64">
              <img src={productImageUrl} alt={title} />
            </figure>
          ) : null}
        </div>
        <div className="column">
          <p className="title is-5">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="card product-embed"
      data-product-gid={productGid}
      contentEditable={false}
    >
      {productImageUrl ? (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={productImageUrl} alt={title} />
          </figure>
        </div>
      ) : null}
      <div className="card-content">
        <p className="title is-5">{title}</p>
      </div>
    </div>
  );
}

export function ProductEmbedExternal({ block }) {
  return <ProductEmbedBlock block={block} />;
}
