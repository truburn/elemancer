import { containerClasses } from "@layout/Container";

export interface ContainerProps {}

/**
 * Container Component
 */
export function Container(props: ContainerProps) {
  return <div className={containerClasses.root}>Container Component</div>;
}
