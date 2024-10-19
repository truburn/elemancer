import { generateUUID } from "@utils/generate";
import { useMemo } from "react";

/**
 * Hook to extract the base props from a component
 */
export interface ExtractedProps<T = any> {
  props: T;
  id?: string;
  overrideClasses?: any;
}

export function useExtractProps<T = any>(
  _props: any,
  prefix: string,
  suffix?: string
): ExtractedProps<T> {
  const extracted = useMemo<ExtractedProps<T>>(() => {
    const defaultID = generateUUID({ prefix, lengths: [8], suffix });
    const { id = defaultID, overrideClasses, ...props } = _props;
    return { id, overrideClasses, props };
  }, [_props, prefix, suffix]);

  return extracted;
}
