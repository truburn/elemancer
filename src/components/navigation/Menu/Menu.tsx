import { menuClasses } from "@navigation/Menu";

export interface MenuProps {}

/**
 * Menu Component
 */
export function Menu(props: MenuProps) {
  return <div className={menuClasses.root}>Menu Component</div>;
}
