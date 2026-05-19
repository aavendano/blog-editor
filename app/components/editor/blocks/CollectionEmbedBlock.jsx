import {
  CollectionEmbedView,
  propsFromBlock,
} from "./CollectionEmbedView";

export function CollectionEmbedBlock({ block }) {
  return (
    <CollectionEmbedView {...propsFromBlock(block)} contentEditable={false} />
  );
}

export function CollectionEmbedExternal({ block }) {
  return <CollectionEmbedView {...propsFromBlock(block)} />;
}
