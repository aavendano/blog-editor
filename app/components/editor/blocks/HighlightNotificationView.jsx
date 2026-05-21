const SUPPORTED_VARIANTS = new Set([
  "is-link",
  "is-primary",
  "is-light",
  "is-dark",
]);

/**
 * @param {{ block: { props: Record<string, string> } }} block
 */
export function propsFromBlock(block) {
  const p = block.props || {};
  const variant = p.notificationVariant || "is-light";
  return {
    variant: SUPPORTED_VARIANTS.has(variant) ? variant : "is-light",
    title: p.notificationTitle || "",
    linkUrl: p.notificationLinkUrl || "",
    linkLabel: p.notificationLinkLabel || "",
  };
}

/**
 * @param {{
 *   variant?: "is-link" | "is-primary" | "is-light" | "is-dark";
 *   title?: string;
 *   linkUrl?: string;
 *   linkLabel?: string;
 *   contentRef?: (node: HTMLElement | null) => void;
 * }} props
 */
export function HighlightNotificationView({
  variant = "is-light",
  title = "",
  linkUrl = "",
  linkLabel = "",
  contentRef,
}) {
  const safeVariant = SUPPORTED_VARIANTS.has(variant) ? variant : "is-light";
  const variantClassName = `b-${safeVariant}`;

  return (
    <aside
      className={`b-notification highlight-notification-embed ${variantClassName}`}
      data-notification-variant={safeVariant}
    >
      {title ? <p className="b-title b-is-6">{title}</p> : null}
      <div className="b-content">
        <p className="highlight-notification-body" ref={contentRef} />
      </div>
      {linkUrl ? (
        <p className="highlight-notification-link">
          <a href={linkUrl}>{linkLabel || linkUrl}</a>
        </p>
      ) : null}
    </aside>
  );
}
