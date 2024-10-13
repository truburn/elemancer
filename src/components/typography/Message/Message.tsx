import { useMessageStyles } from "@typography/Message";
import { ComponentBase } from "@utils/types";

export interface MessageProps extends ComponentBase {}

/**
 * Text block element to display a status message
 */
export function Message(_props: MessageProps) {
  const messageClasses = useMessageStyles();

  return <div className={messageClasses.root}>Message Component</div>;
}
