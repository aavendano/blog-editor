import { ProductRowView, propsFromBlock } from "./ProductRowView";

export function ProductRowBlock({ block }) {
  return <ProductRowView {...propsFromBlock(block)} contentEditable={false} />;
}

export function ProductRowExternal({ block }) {
  return <ProductRowView {...propsFromBlock(block)} />;
}
