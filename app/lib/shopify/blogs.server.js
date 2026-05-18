/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function listBlogs(admin, first = 25) {
  const response = await admin.graphql(
    `#graphql
      query ListBlogs($first: Int!) {
        blogs(first: $first) {
          nodes {
            id
            title
            handle
          }
        }
      }`,
    { variables: { first } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.blogs.nodes;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function getBlogArticles(admin, blogId, first = 50) {
  const response = await admin.graphql(
    `#graphql
      query BlogArticles($id: ID!, $first: Int!) {
        blog(id: $id) {
          id
          title
          articles(first: $first) {
            nodes {
              id
              title
              handle
              updatedAt
              isPublished
            }
          }
        }
      }`,
    { variables: { id: blogId, first } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.blog;
}
