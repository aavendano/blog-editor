import { getProduct, getCollection } from "../shopify/catalog.server";
import { getArticle, excerptFromArticle } from "../shopify/articles.server";

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 * @param {Record<string, unknown>} props
 */
async function enrichProductEmbedProps(admin, props) {
  const gid = props.productGid;
  if (!gid) return props;

  try {
    const product = await getProduct(admin, String(gid));
    if (!product) return props;
    const price = product.priceRangeV2?.minVariantPrice;
    return {
      ...props,
      productTitle: product.title || props.productTitle || "Product",
      productImageUrl:
        product.featuredImage?.url || props.productImageUrl || "",
      productHandle: product.handle || props.productHandle || "",
      productPriceLabel: price
        ? `${price.amount} ${price.currencyCode}`
        : props.productPriceLabel || "",
    };
  } catch {
    return {
      ...props,
      productTitle: props.productTitle || "Product",
      productHandle: props.productHandle || "",
      productImageUrl: props.productImageUrl || "",
      productPriceLabel: props.productPriceLabel || "",
    };
  }
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 * @param {Record<string, unknown>} props
 */
async function enrichCollectionEmbedProps(admin, props) {
  const gid = props.collectionGid;
  if (!gid) return props;

  try {
    const collection = await getCollection(admin, String(gid));
    if (!collection) return props;
    return {
      ...props,
      collectionTitle: collection.title || props.collectionTitle || "Collection",
      collectionImageUrl: collection.image?.url || props.collectionImageUrl || "",
      collectionHandle: collection.handle || props.collectionHandle || "",
    };
  } catch {
    return {
      ...props,
      collectionTitle: props.collectionTitle || "Collection",
      collectionHandle: props.collectionHandle || "",
      collectionImageUrl: props.collectionImageUrl || "",
    };
  }
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 * @param {Record<string, unknown>} props
 */
async function enrichArticleEmbedProps(admin, props) {
  const gid = props.articleGid;
  if (!gid) return props;

  try {
    const article = await getArticle(admin, String(gid));
    if (!article) return props;
    return {
      ...props,
      articleTitle: article.title || props.articleTitle || "Article",
      articleHandle: article.handle || props.articleHandle || "",
      articleImageUrl: article.image?.url || props.articleImageUrl || "",
      blogHandle: article.blog?.handle || props.blogHandle || "",
      blogTitle: article.blog?.title || props.blogTitle || "",
      articleExcerpt:
        excerptFromArticle(article) || props.articleExcerpt || "",
    };
  } catch {
    return {
      ...props,
      articleTitle: props.articleTitle || "Article",
      articleHandle: props.articleHandle || "",
      articleImageUrl: props.articleImageUrl || "",
      blogHandle: props.blogHandle || "",
      blogTitle: props.blogTitle || "",
      articleExcerpt: props.articleExcerpt || "",
    };
  }
}

/**
 * @param {Record<string, unknown>} block
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
async function enrichBlock(block, admin) {
  const type = block.type;
  const props = block.props || {};

  let enrichedProps = props;
  if (type === "productEmbed" || type === "productHorizontal") {
    enrichedProps = await enrichProductEmbedProps(admin, props);
  } else if (type === "articleEmbed") {
    enrichedProps = await enrichArticleEmbedProps(admin, props);
  } else if (type === "collectionEmbed") {
    enrichedProps = await enrichCollectionEmbedProps(admin, props);
  }

  const children = Array.isArray(block.children) ? block.children : [];
  const enrichedChildren = await Promise.all(
    children.map((child) => enrichBlock(child, admin)),
  );

  return {
    ...block,
    props: enrichedProps,
    children: enrichedChildren,
  };
}

/**
 * @param {unknown} blocknoteDoc
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 */
export async function enrichBlocknoteDoc(blocknoteDoc, admin) {
  const blocks = Array.isArray(blocknoteDoc) ? blocknoteDoc : [];
  return Promise.all(blocks.map((block) => enrichBlock(block, admin)));
}
