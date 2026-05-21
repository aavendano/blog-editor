import {
  HighlightNotificationView,
  propsFromBlock,
} from "./HighlightNotificationView";

export function HighlightNotificationBlock({ block, contentRef }) {
  return (
    <HighlightNotificationView
      {...propsFromBlock(block)}
      contentRef={contentRef}
    />
  );
}

export function HighlightNotificationExternal({ block, contentRef }) {
  return (
    <HighlightNotificationView
      {...propsFromBlock(block)}
      contentRef={contentRef}
    />
  );
}
