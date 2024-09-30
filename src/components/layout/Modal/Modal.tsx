import { modalClasses } from "@layout/Modal";

export interface ModalProps {}

/**
 * Modal Component
 */
export function Modal(props: ModalProps) {
  return <div className={modalClasses.root}>Modal Component</div>;
}
