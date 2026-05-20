import { ArticleEmbedView, propsFromBlock } from "./ArticleEmbedView";

export function ArticleEmbedBlock({ block }) {
  return (
    <ArticleEmbedView {...propsFromBlock(block)} contentEditable={false} />
  );
}

export function ArticleEmbedExternal({ block }) {
  return <ArticleEmbedView {...propsFromBlock(block)} />;
}
