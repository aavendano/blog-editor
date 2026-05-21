import {
  TableOfContentsView,
  propsFromBlock,
} from "./TableOfContentsView";

export function TableOfContentsBlock({ block }) {
  return (
    <TableOfContentsView {...propsFromBlock(block)} contentEditable={false} />
  );
}

export function TableOfContentsExternal({ block }) {
  return <TableOfContentsView {...propsFromBlock(block)} />;
}
