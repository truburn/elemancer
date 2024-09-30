import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeading as SectionHeadingComponent } from "@typography/SectionHeading";

const meta = {
  component: SectionHeadingComponent,
} satisfies Meta<typeof SectionHeadingComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionHeading: Story = {};
