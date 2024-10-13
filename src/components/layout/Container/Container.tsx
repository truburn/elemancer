import { containerStyles } from "@layout/Container";

export interface ContainerProps {}

/**
 * Container Component
 */
export function Container(_props: ContainerProps) {
  const containerClasses = containerStyles();

  return <div className={containerClasses.root}>Container Component</div>;
}
