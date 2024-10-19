import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export const useSwitchStyles = () => {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    ...paddingMixin(16),
  });

  return { root };
};
