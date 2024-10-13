import { generateUUID } from "@utils/generate";
import { ComponentBase } from "@utils/types";
import { useMemo } from "react";

/**
 * Hook to extract the base props from a component
 */
export type ExtractedProps<T = any> = ComponentBase & {
  props: T;
};

export function useExtractProps<T = any>(
  _props: any,
  prefix: string,
  suffix?: string
): ExtractedProps<T> {
  const extracted = useMemo<ExtractedProps<T>>(() => {
    const defaultID = generateUUID({ prefix, radii: [8], suffix });
    const { id = defaultID, classes, styles, ...props } = _props;
    return { id, classes, styles, props };
  }, [_props, prefix, suffix]);

  return extracted;
}
