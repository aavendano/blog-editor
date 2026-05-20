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
    <article
      className="b-media article-embed"
      data-article-gid={gid}
      contentEditable={contentEditable}
    >
      {imageUrl ? (
        <figure className="b-media-left">
          <div className="b-image b-is-150x150">
            <img src={imageUrl} alt={title} />
          </div>
        </figure>
      ) : null}
      <div className="b-media-content">
        <div className="b-content">
          <h3 className="b-title">{title}</h3>
          {blogTitle ? <h4 className="b-subtitle">{blogTitle}</h4> : null}
          {excerpt ? <p className="b-text b-is-5">{excerpt}</p> : null}
        </div>
        {blogHandle && handle ? (
          <a
            href={`/blogs/${blogHandle}/articles/${handle}`}
            className="b-button b-is-primary b-is-small"
          >
            Learn more
          </a>
        ) : null}
      </div>
    </article>
  );
}
