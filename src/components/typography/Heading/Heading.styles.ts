import { css } from "@emotion/css";

export function useHeadingStyles() {
  const root = css({
    border: "dotted 1px",
    padding: 16,
  });

  const subtitle = css({});

  return { root, subtitle };
}
