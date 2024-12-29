import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "@navigation/Button";

const meta = {
  component: ButtonComponent,
  tags: ["pending"],
  args: {
    label: "Button",
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {};
