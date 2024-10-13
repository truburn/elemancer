import { useFooterStyles } from "@layout/Footer";

export interface FooterProps {}

/**
 * Footer Component
 */
export function Footer(_props: FooterProps) {
  const footerClasses = useFooterStyles();

  return <div className={footerClasses.root}>Footer Component</div>;
}
