import { css } from "@emotion/css";

export function useButtonStyles() {
  const root = css({
    border: "dotted 1px",
    padding: 16,
  });

  return { root };
}
