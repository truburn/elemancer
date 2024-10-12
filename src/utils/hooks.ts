import { generateUUID } from "@utils/generate";
import { ComponentBase } from "@utils/types";
import { useMemo } from "react";

/**
 * Hook to extract the base props from a component
 */
export interface ExtractedProps extends ComponentBase {
  props: any;
}

export function useExtractProps(
  _props: any,
  prefix: string,
  suffix?: string
): ExtractedProps {
  const extracted = useMemo<ExtractedProps>(() => {
    const defaultID = generateUUID({ prefix, radii: [8], suffix });
    const { id = defaultID, className, classes, styles, ...props } = _props;
    return { id, className, classes, styles, props };
  }, [_props, prefix, suffix]);

  return extracted;
}
