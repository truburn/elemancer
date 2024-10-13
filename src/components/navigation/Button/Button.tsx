import { buttonStyles } from "@navigation/Button";

export interface ButtonProps {}

/**
 * Button component
 */
export function Button(_props: ButtonProps) {
  const buttonClasses = buttonStyles();

  return <div className={buttonClasses.root}>Button Component</div>;
}
