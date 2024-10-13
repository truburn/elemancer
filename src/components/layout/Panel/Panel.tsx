import { usePanelStyles } from "@layout/Panel";

export interface PanelProps {}

/**
 * Panel Component
 */
export function Panel(_props: PanelProps) {
  const panelClasses = usePanelStyles();

  return <div className={panelClasses.root}>Panel Component</div>;
}
