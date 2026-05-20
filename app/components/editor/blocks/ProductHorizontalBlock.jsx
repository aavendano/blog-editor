import {
  ProductHorizontalView,
  propsFromBlock,
} from "./ProductHorizontalView";

export function ProductHorizontalBlock({ block }) {
  return (
    <ProductHorizontalView {...propsFromBlock(block)} contentEditable={false} />
  );
}

export function ProductHorizontalExternal({ block }) {
  return <ProductHorizontalView {...propsFromBlock(block)} />;
}
