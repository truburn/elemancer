import { useButtonStyles } from "@navigation/Button";

export interface ButtonProps {}

/**
 * Button component
 */
export const Button = (_props: ButtonProps) => {
  const buttonClasses = useButtonStyles();

  return <div className={buttonClasses.root}>Button Component</div>;
};
