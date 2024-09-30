import { headerClasses } from "@layout/Header";

export interface HeaderProps {}

/**
 * Header Component
 */
export function Header(props: HeaderProps) {
  return <div className={headerClasses.root}>Header Component</div>;
}
