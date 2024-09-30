import { linkClasses } from "@navigation/Link";

export interface LinkProps {}

/**
 * Link component
 */
export function Link(props: LinkProps) {
  return <div className={linkClasses.root}>Link Component</div>;
}
