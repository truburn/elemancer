import { css } from "@emotion/css";
import { borderMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";

export function useHeadingStyles() {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    padding: 16,
  });

  const subtitle = css({
    display: "block",
  });

  return { root, subtitle };
}
