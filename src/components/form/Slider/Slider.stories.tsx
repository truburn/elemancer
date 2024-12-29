import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@form/Slider";

const meta = {
  component: Slider,
  tags: ["pending"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TempStory: Story = {};
