import { ButtonProps } from "@navigation/Button";
import { HeadingProps } from "@typography/Heading";
import { ComponentBase } from "@utils/types";
import { ReactNode } from "react";

type HeaderContent = Array<
  | ((HeadingProps | ButtonProps) & {
      type: "heading" | "button";
    })
  | ReactNode
>;

export interface HeaderProps extends ComponentBase {
  /**
   * Content to display inside the container. If `children` is defined,
   * all other content options are ignored.
   */
  children?: ReactNode;
  /**
   * Content to render at the beginning of the container. In `ltr` format
   * this is at the left side of the container. In `rtl` format this is at
   * the right side of the container.
   */
  startContent?: HeaderContent;
  /**
   * Content to render at the end of the container. In `ltr` format
   * this is at the right side of the container. In `rtl` format this is at
   * the left side of the container.
   */
  endContent?: HeaderContent;
  /** Content to render in the center of the container. */
  midContent?: HeaderContent;
  /**
   * Indicate what content should be hidden when the component is within a
   * container with a width. The contents will be collapsed into a slide
   * out menu.
   */
  hideOnMobile?: Array<"start" | "end" | "mid" | "all">;
  /** Icon to show on the button to expand and collapse hidden content */
  mobileIcon?: string;
  /** Label to apply to the icon button when there is hidden content  */
  mobileIconLabel?: string;
}

export interface HeaderContentProps {
  id: string;
  content: HeaderContent;
  className?: string;
}
