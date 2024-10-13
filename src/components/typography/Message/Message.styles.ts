import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useMessageStyles() {
  const theme = useTheme();

  const root = css({
    border: "dotted 1px",
    padding: 16,
  });

  return { root };
}
