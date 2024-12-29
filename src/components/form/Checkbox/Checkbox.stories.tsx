import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@form/Checkbox";

const meta = {
  component: Checkbox,
  tags: ["pending"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TempStory: Story = {};
