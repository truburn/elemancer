import type { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "@layout/Header";

const meta = {
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {};
