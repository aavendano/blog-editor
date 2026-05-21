import { getProduct, getCollection } from "../shopify/catalog.server";
import { getArticle, excerptFromArticle } from "../shopify/articles.server";

const PRODUCT_ROW_MAX = 4;

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
 * @param {Record<string, unknown>} props
 * @param {1 | 2 | 3 | 4} slot
 */
function getProductRowSlot(props, slot) {
  const suffix = String(slot);
  return {
    gid: props[`product${suffix}Gid`] || "",
    title: props[`product${suffix}Title`] || "",
    imageUrl: props[`product${suffix}ImageUrl`] || "",
    handle: props[`product${suffix}Handle`] || "",
    priceLabel: props[`product${suffix}PriceLabel`] || "",
  };
}

/**
 * @param {Record<string, unknown>} props
 * @param {1 | 2 | 3 | 4} slot
 * @param {{ gid: string; title: string; imageUrl: string; handle: string; priceLabel: string }} product
 */
function setProductRowSlot(props, slot, product) {
  const suffix = String(slot);
  props[`product${suffix}Gid`] = product.gid;
  props[`product${suffix}Title`] = product.title;
  props[`product${suffix}ImageUrl`] = product.imageUrl;
  props[`product${suffix}Handle`] = product.handle;
  props[`product${suffix}PriceLabel`] = product.priceLabel;
}

/**
 * @param {import("@shopify/shopify-app-react-router/server").AdminApiContext} admin
 * @param {Record<string, unknown>} props
 */
async function enrichProductRowProps(admin, props) {
  const enrichedProps = { ...props };
  const slots = /** @type {Array<1 | 2 | 3 | 4>} */ ([1, 2, 3, 4]);

  await Promise.all(
    slots.slice(0, PRODUCT_ROW_MAX).map(async (slot) => {
      const current = getProductRowSlot(props, slot);
      if (!current.gid) {
        setProductRowSlot(enrichedProps, slot, {
          gid: "",
          title: current.title || "",
          imageUrl: current.imageUrl || "",
          handle: current.handle || "",
          priceLabel: current.priceLabel || "",
        });
        return;
      }

      try {
        const product = await getProduct(admin, String(current.gid));
        if (!product) {
          setProductRowSlot(enrichedProps, slot, {
            gid: String(current.gid),
            title: current.title || "Product",
            imageUrl: current.imageUrl || "",
            handle: current.handle || "",
            priceLabel: current.priceLabel || "",
          });
          return;
        }

        const price = product.priceRangeV2?.minVariantPrice;
        setProductRowSlot(enrichedProps, slot, {
          gid: String(product.id || current.gid),
          title: product.title || current.title || "Product",
          imageUrl: product.featuredImage?.url || current.imageUrl || "",
          handle: product.handle || current.handle || "",
          priceLabel: price
            ? `${price.amount} ${price.currencyCode}`
            : current.priceLabel || "",
        });
      } catch {
        setProductRowSlot(enrichedProps, slot, {
          gid: String(current.gid),
          title: current.title || "Product",
          imageUrl: current.imageUrl || "",
          handle: current.handle || "",
          priceLabel: current.priceLabel || "",
        });
      }
    }),
  );

  return enrichedProps;
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
  } else if (type === "productRow") {
    enrichedProps = await enrichProductRowProps(admin, props);
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
