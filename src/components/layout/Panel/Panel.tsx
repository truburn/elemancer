import { panelClasses } from "@layout/Panel";

export interface PanelProps {}

/**
 * Panel Component
 */
export function Panel(props: PanelProps) {
  return <div className={panelClasses.root}>Panel Component</div>;
}
