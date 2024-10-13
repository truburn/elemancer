import { blockquoteStyles } from "@layout/Blockquote";

export interface BlockquoteProps {}

/**
 * Blockquote component
 */
export function Blockquote(_props: BlockquoteProps) {
  const blockquoteClasses = blockquoteStyles();

  return <div className={blockquoteClasses.root}>Blockquote Component</div>;
}
