import { sectionHeadingClasses } from "@typography/SectionHeading";

export interface SectionHeadingProps {}

/**
 * Heading elements as `<h2>` tags and below
 */
export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div className={sectionHeadingClasses.root}>Section Heading Component</div>
  );
}
