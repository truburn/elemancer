import { css } from "@emotion/css";
import { borderMixin, marginMixin, paddingMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";

export function useHeadingStyles() {
  const theme = useTheme();

  const subtitle = css({
    display: "block",
    fontSize: "0.875em",
  });

  const root = css({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    lineHeight: 1,
    "&.level-2": {
      fontFamily: theme.font.secondary.family,
      fontWeight: theme.font.secondary.weight.black,
      ...borderMixin({
        color: theme.color.primary,
        width: { top: 2 },
        radius: 0,
      }),
      ...marginMixin({ top: 32, bottom: 16 }),
      ...paddingMixin({ top: 16 }),
      gap: 2,
      [`& .${subtitle}`]: {
        fontWeight: theme.font.secondary.weight.light,
        fontVariant: "all-small-caps",
        ...paddingMixin({ left: 2 }),
      },
      "&:first-of-type": {
        ...marginMixin(),
        ...paddingMixin(),
        ...borderMixin(),
      },
    },
  });

  return { root, subtitle };
}
