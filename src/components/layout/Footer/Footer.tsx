import { footerClasses } from "@layout/Footer";

export interface FooterProps {}

/**
 * Footer Component
 */
export function Footer(props: FooterProps) {
  return <div className={footerClasses.root}>Footer Component</div>;
}
