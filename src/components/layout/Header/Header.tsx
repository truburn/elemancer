import { headerStyles } from "@layout/Header";

export interface HeaderProps {}

/**
 * Header Component
 */
export function Header(_props: HeaderProps) {
  const headerClasses = headerStyles();

  return <div className={headerClasses.root}>Header Component</div>;
}
