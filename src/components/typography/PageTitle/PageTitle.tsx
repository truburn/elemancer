import { pageTitleClasses } from "@typography/PageTitle";

export interface PageTitleProps {}

/**
 * Standard page title as a `<h1>` tag
 */
export function PageTitle(props: PageTitleProps) {
  return <div className={pageTitleClasses.root}>Page Title Component</div>;
}
