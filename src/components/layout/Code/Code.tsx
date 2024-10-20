import { useCodeStyles } from "@layout/Code";

export interface CodeProps {}

/**
 * Code block component
 */
export function Code(_props: CodeProps) {
  const codeClasses = useCodeStyles();

  return <div className={codeClasses.root}>Code Component</div>;
}
