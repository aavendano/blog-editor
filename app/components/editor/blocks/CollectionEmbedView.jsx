/**
 * @param {{ block: { props: Record<string, string> } }} args
 */
export function propsFromBlock(block) {
  const p = block.props;
  return {
    layout: p.layout || "card",
    gid: p.collectionGid || "",
    title: p.collectionTitle || "Collection",
    imageUrl: p.collectionImageUrl || "",
    handle: p.collectionHandle || "",
  };
}

/**
 * @param {{
 *   layout?: string;
 *   gid?: string;
 *   title?: string;
 *   imageUrl?: string;
 *   handle?: string;
 *   contentEditable?: boolean;
 * }} props
 */
export function CollectionEmbedView({
  gid = "",
  title = "Collection",
  imageUrl = "",
  handle = "",
  contentEditable = false,
}) { return (
    <div
      className="b-card collection-embed"
      data-collection-gid={gid}
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
        {handle ? (
          <a
            href={`/collections/${handle}`}
            className="b-button b-is-link b-is-small"
          >
            View collection
          </a>
        ) : null}
      </div>
    </div>
  );
}
