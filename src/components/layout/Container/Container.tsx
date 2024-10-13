import { useContainerStyles } from "@layout/Container";

export interface ContainerProps {}

/**
 * Container Component
 */
export function Container(_props: ContainerProps) {
  const containerClasses = useContainerStyles();

  return <div className={containerClasses.root}>Container Component</div>;
}
