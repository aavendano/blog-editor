/**
 * @param {{ block: { props: Record<string, string> } }} args
 */
export function propsFromBlock(block) {
  const p = block.props;
  return {
    gid: p.articleGid || "",
    title: p.articleTitle || "Article",
    handle: p.articleHandle || "",
    blogHandle: p.blogHandle || "",
    blogTitle: p.blogTitle || "",
    imageUrl: p.articleImageUrl || "",
    excerpt: p.articleExcerpt || "",
  };
}

/**
 * @param {{
 *   gid?: string;
 *   title?: string;
 *   handle?: string;
 *   blogHandle?: string;
 *   blogTitle?: string;
 *   imageUrl?: string;
 *   excerpt?: string;
 *   contentEditable?: boolean;
 * }} props
 */
export function ArticleEmbedView({
  gid = "",
  title = "Article",
  handle = "",
  blogHandle = "",
  blogTitle = "",
  imageUrl = "",
  excerpt = "",
  contentEditable = false,
}) {
  return (
    <section className="b-section">
      <div className="b-box">
        {imageUrl ? (
          <div className="b-is-pulled-left">
            <div className="b-mr-4 b-mb-4">
              <figure className="b-image b-is-150x150">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        ) : null}
        <div className="b-block">
          <h3 className="b-title">{title}</h3>
          {blogTitle ? <h4 className="b-subtitle">{blogTitle}</h4> : null}
        </div>
        <div className="b-block">
          <div className="b-content">
            {excerpt ? <p>{excerpt}</p> : null}
          </div>
        </div>
        {blogHandle && handle ? (
          <div className="b-block b-is-flex b-is-justify-content-flex-end">
            <a
              href={`/blogs/${blogHandle}/articles/${handle}`}
              className="b-button b-is-link b-is-small"
            >
              Learn more
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
