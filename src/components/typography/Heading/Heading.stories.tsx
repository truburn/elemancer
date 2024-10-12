import type { Meta, StoryObj } from "@storybook/react";
import { Heading as HeadingComponent } from "@typography/Heading";

const meta = {
  component: HeadingComponent,
} satisfies Meta<typeof HeadingComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {};
