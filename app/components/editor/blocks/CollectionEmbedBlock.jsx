export function CollectionEmbedBlock({ block }) {
  const { collectionTitle, collectionImageUrl, layout, collectionGid } =
    block.props;
  const title = collectionTitle || "Collection";

  if (layout === "row") {
    return (
      <div
        className="columns is-vcentered is-mobile collection-embed"
        data-collection-gid={collectionGid}
        contentEditable={false}
      >
        <div className="column is-narrow">
          {collectionImageUrl ? (
            <figure className="image is-64x64">
              <img src={collectionImageUrl} alt={title} />
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
      className="card collection-embed"
      data-collection-gid={collectionGid}
      contentEditable={false}
    >
      {collectionImageUrl ? (
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={collectionImageUrl} alt={title} />
          </figure>
        </div>
      ) : null}
      <div className="card-content">
        <p className="title is-5">{title}</p>
      </div>
    </div>
  );
}

export function CollectionEmbedExternal({ block }) {
  return <CollectionEmbedBlock block={block} />;
}
