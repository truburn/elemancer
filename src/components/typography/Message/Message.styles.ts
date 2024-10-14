import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin } from "@styles/mixins";

export function useMessageStyles() {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    padding: 16,
  });

  return { root };
}
