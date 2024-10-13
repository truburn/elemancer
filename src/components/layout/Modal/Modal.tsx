import { modalStyles } from "@layout/Modal";

export interface ModalProps {}

/**
 * Modal Component
 */
export function Modal(_props: ModalProps) {
  const modalClasses = modalStyles();

  return <div className={modalClasses.root}>Modal Component</div>;
}
