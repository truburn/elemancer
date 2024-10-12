import { headingClasses } from "@typography/Heading";

export interface HeadingProps {}

/**
 * Heading component
 */
export function Heading(props: HeadingProps) {
  return <div className={headingClasses.root}>Heading Component</div>;
}
