import { footerStyles } from "@layout/Footer";

export interface FooterProps {}

/**
 * Footer Component
 */
export function Footer(_props: FooterProps) {
  const footerClasses = footerStyles();

  return <div className={footerClasses.root}>Footer Component</div>;
}
