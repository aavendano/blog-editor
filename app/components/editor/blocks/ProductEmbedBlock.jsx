import {
  ProductEmbedView,
  propsFromBlock,
} from "./ProductEmbedView";

export function ProductEmbedBlock({ block }) {
  return (
    <ProductEmbedView {...propsFromBlock(block)} contentEditable={false} />
  );
}

export function ProductEmbedExternal({ block }) {
  return <ProductEmbedView {...propsFromBlock(block)} />;
}
