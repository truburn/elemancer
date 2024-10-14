import { CSSObject, Theme } from "@emotion/react";

export function borderMixin(params: Theme["border"]): CSSObject {
  return {
    borderWidth: params.width,
    borderColor: params.color,
    borderRadius: params.radius,
    borderStyle: params.style,
  };
}
