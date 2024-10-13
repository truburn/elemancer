import { linkStyles } from "@navigation/Link";

export interface LinkProps {}

/**
 * Link component
 */
export function Link(_props: LinkProps) {
  const linkClasses = linkStyles();

  return <div className={linkClasses.root}>Link Component</div>;
}
