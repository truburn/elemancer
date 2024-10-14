import { css } from "@emotion/css";
import { borderMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";

export function usePanelStyles() {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    padding: 16,
  });

  return { root };
}
