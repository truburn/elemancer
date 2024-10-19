import { cx } from "@emotion/css";
import { HeaderContent, HeaderProps, useHeaderStyles } from "@layout/Header";
import { useExtractProps } from "@utils/hooks";

/**
 * Header element for use in sections within the page. The page header
 * should be rendered in the app layout wrapper
 */
export function Header(_props: HeaderProps) {
  const { overrideClasses, id, props } = useExtractProps(_props, "header");
  const {
    children,
    startContent = [],
    endContent = [],
    midContent = [],
  } = props;
  const classes = useHeaderStyles();

  return (
    <div id={id} className={cx(classes.root, overrideClasses?.root)}>
      {children ?? (
        <>
          <HeaderContent
            id={`${id}-start`}
            className={cx(classes.section, overrideClasses?.section, "start")}
            content={startContent}
          />
          <HeaderContent
            id={`${id}-mid`}
            className={cx(classes.section, overrideClasses?.section, "mid")}
            content={midContent}
          />
          <HeaderContent
            id={`${id}-end`}
            className={cx(classes.section, overrideClasses?.section, "end")}
            content={endContent}
          />
        </>
      )}
    </div>
  );
}
