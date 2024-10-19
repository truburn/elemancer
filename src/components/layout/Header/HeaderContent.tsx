import { cx } from "@emotion/css";
import { HeaderContentProps, useHeaderStyles } from "@layout/Header";
import { Button } from "@navigation/Button";
import { Heading } from "@typography/Heading";

/**
 * Renders each section of the `<Header />` component. It will render
 * the appropriate children based on their type
 */
export function HeaderContent(props: HeaderContentProps) {
  const { id, content, className } = props;
  const classes = useHeaderStyles();

  return (
    <div id={id} className={className}>
      {content.map((item: any, idx) => {
        if (item?.type) {
          const { type, ...contentProps } = item;
          if (type === "button") {
            return (
              <Button
                key={idx}
                {...contentProps}
                overrideClasses={{
                  ...contentProps.overrideClasses,
                  root: cx(contentProps.overrideClasses?.root, classes.button),
                }}
              />
            );
          }
          if (type === "heading") {
            return (
              <Heading
                key={idx}
                {...contentProps}
                overrideClasses={{
                  ...contentProps.overrideClasses,
                  root: cx(contentProps.overrideClasses?.root, classes.heading),
                }}
              />
            );
          }
        }

        return item;
      })}
    </div>
  );
}
