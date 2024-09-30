import { codeClasses } from "@layout/Code";

export interface CodeProps {}

/**
 * Code block component
 */
export function Code(props: CodeProps) {
  return <div className={codeClasses.root}>Code Component</div>;
}
