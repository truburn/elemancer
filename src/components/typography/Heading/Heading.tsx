import { cx } from "@emotion/css";
import { useHeadingStyles } from "@typography/Heading";
import { useExtractProps } from "@utils/hooks";
import { ComponentBase } from "@utils/types";

export interface HeadingProps extends ComponentBase {
  title: string;
  subtitle?: string;
  /** Level of the heading tag to use. Level 1 is reserved for the page title and is not available here. */
  depth?: 2 | 3 | 4 | 5 | 6;
}

/**
 * Heading component
 */
export function Heading(_props: HeadingProps) {
  const { classes, styles, id, props } = useExtractProps<HeadingProps>(
    _props,
    "heading",
  );
  const { title, subtitle, depth = 2 } = props satisfies HeadingProps;
  const headingClasses = useHeadingStyles();
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={cx(`level-${depth}`, headingClasses.root, classes?.root)}
      style={styles}
    >
      <span className={cx(headingClasses.title, classes?.title)}>
        {title ?? `Heading level ${depth}`}
      </span>
      {subtitle && (
        <small className={cx(headingClasses.subtitle, classes?.subtitle)}>
          {subtitle}
        </small>
      )}
    </Tag>
  );
}
