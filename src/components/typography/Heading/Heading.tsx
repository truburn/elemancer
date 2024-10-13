import { cx } from "@emotion/css";
import { headingStyles } from "@typography/Heading";
import { useExtractProps } from "@utils/hooks";
import { ComponentBase } from "@utils/types";

export interface HeadingProps extends ComponentBase {
  title: string;
  subtitle?: string;
  depth?: 1 | 2 | 3 | 4 | 5 | 6;
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
  const headingClasses = headingStyles();
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={cx(headingClasses.root, classes?.root)}
      style={styles}
    >
      {title ?? `Heading level ${depth}`}
      {subtitle && (
        <span className={cx([headingClasses.subtitle, classes?.subtitle])}>
          {subtitle}
        </span>
      )}
    </Tag>
  );
}
