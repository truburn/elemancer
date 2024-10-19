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
  const { overrideClasses, id, props } = useExtractProps<HeadingProps>(
    _props,
    "heading",
  );
  const { title, subtitle, depth = 2 } = props satisfies HeadingProps;
  const classes = useHeadingStyles();
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={cx(`level-${depth}`, classes.root, overrideClasses?.root)}
    >
      <span className={cx(classes.title, overrideClasses?.title)}>
        {title ?? `Heading level ${depth}`}
      </span>
      {subtitle && (
        <small className={cx(classes.subtitle, overrideClasses?.subtitle)}>
          {subtitle}
        </small>
      )}
    </Tag>
  );
}
