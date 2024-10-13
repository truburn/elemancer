import { useHeaderStyles } from "@layout/Header";

export interface HeaderProps {}

/**
 * Header Component
 */
export function Header(_props: HeaderProps) {
  const headerClasses = useHeaderStyles();

  return <div className={headerClasses.root}>Header Component</div>;
}
