/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function searchProducts(admin, query = "", first = 10) {
  const response = await admin.graphql(
    `#graphql
      query SearchProducts($query: String, $first: Int!) {
        products(first: $first, query: $query) {
          nodes {
            id
            title
            handle
            featuredImage {
              url
              altText
            }
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
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
  return data.products.nodes;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function getProduct(admin, id) {
  const response = await admin.graphql(
    `#graphql
      query GetProduct($id: ID!) {
        product(id: $id) {
          id
          title
          handle
          featuredImage {
            url
            altText
          }
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }`,
    { variables: { id } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.product;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function searchCollections(admin, query = "", first = 10) {
  const response = await admin.graphql(
    `#graphql
      query SearchCollections($query: String, $first: Int!) {
        collections(first: $first, query: $query) {
          nodes {
            id
            title
            handle
            image {
              url
              altText
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
  return data.collections.nodes;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function getCollection(admin, id) {
  const response = await admin.graphql(
    `#graphql
      query GetCollection($id: ID!) {
        collection(id: $id) {
          id
          title
          handle
          image {
            url
            altText
          }
        }
      }`,
    { variables: { id } },
  );
  const { data, errors } = await response.json();
  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }
  return data.collection;
}
