import { blockquoteClasses } from "@layout/Blockquote";

export interface BlockquoteProps {}

/**
 * Blockquote component
 */
export function Blockquote(props: BlockquoteProps) {
  return <div className={blockquoteClasses.root}>Blockquote Component</div>;
}
