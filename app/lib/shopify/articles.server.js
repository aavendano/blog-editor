export { excerptFromArticle } from "./article-excerpt.js";

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function searchArticles(admin, query = "", first = 10) {
  const response = await admin.graphql(
    `#graphql
      query SearchArticles($query: String, $first: Int!) {
        articles(first: $first, query: $query) {
          nodes {
            id
            title
            handle
            summary
            image {
              url
            }
            blog {
              id
              handle
              title
            }
          }
        }
      }`,
    { variables: { query: query || undefined, first } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.articles.nodes;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function getArticle(admin, id) {
  const response = await admin.graphql(
    `#graphql
      query GetArticle($id: ID!) {
        article(id: $id) {
          id
          title
          handle
          body
          summary
          image {
            url
          }
          blog {
            id
            title
            handle
          }
          updatedAt
          isPublished
        }
      }`,
    { variables: { id } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.article;
}

/**
 * @param {{ userId?: bigint | null, firstName?: string | null, lastName?: string | null, email?: string | null, shop?: string }} session
 */
export function resolveArticleAuthor(session) {
  if (session.userId) {
    return { userId: `gid://shopify/StaffMember/${session.userId}` };
  }
  const name = [session.firstName, session.lastName].filter(Boolean).join(" ").trim();
  if (name) return { name };
  if (session.email) return { name: session.email.split("@")[0] };
  const shopSlug = session.shop?.replace(/\.myshopify\.com$/i, "") || "Store";
  return { name: shopSlug };
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function createArticle(admin, { blogId, title, bodyHtml, handle, author }) {
  const response = await admin.graphql(
    `#graphql
      mutation ArticleCreate($article: ArticleCreateInput!) {
        articleCreate(article: $article) {
          article {
            id
            title
            handle
          }
          userErrors {
            field
            message
          }
        }
      }`,
    {
      variables: {
        article: {
          blogId,
          title,
          body: bodyHtml,
          author,
          ...(handle ? { handle } : {}),
          isPublished: true,
        },
      },
    },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  const result = data.articleCreate;
  if (result.userErrors?.length) {
    throw new Error(result.userErrors.map((e) => e.message).join(", "));
  }
  return result.article;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function updateArticle(admin, { id, title, bodyHtml, blogId, handle }) {
  const response = await admin.graphql(
    `#graphql
      mutation ArticleUpdate($id: ID!, $article: ArticleUpdateInput!) {
        articleUpdate(id: $id, article: $article) {
          article {
            id
            title
            handle
          }
          userErrors {
            field
            message
          }
        }
      }`,
    {
      variables: {
        id,
        article: {
          title,
          body: bodyHtml,
          ...(blogId ? { blogId } : {}),
          ...(handle ? { handle } : {}),
          isPublished: true,
        },
      },
    },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  const result = data.articleUpdate;
  if (result.userErrors?.length) {
    throw new Error(result.userErrors.map((e) => e.message).join(", "));
  }
  return result.article;
}
