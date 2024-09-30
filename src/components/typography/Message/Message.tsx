import { messageClasses } from "@typography/Message";

export interface MessageProps {}

/**
 * Text block element to display a status message
 */
export function Message(props: MessageProps) {
  return <div className={messageClasses.root}>Message Component</div>;
}
