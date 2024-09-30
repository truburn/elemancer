import { buttonClasses } from "@navigation/Button";

export interface ButtonProps {}

/**
 * Button component
 */
export function Button(props: ButtonProps) {
  return <div className={buttonClasses.root}>Button Component</div>;
}
