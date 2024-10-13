import { menuStyles } from "@navigation/Menu";

export interface MenuProps {}

/**
 * Menu Component
 */
export function Menu(_props: MenuProps) {
  const menuClasses = menuStyles();

  return <div className={menuClasses.root}>Menu Component</div>;
}
