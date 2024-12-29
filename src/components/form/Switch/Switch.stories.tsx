import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@form/Switch";

const meta = {
  component: Switch,
  tags: ["pending"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TempStory: Story = {};
