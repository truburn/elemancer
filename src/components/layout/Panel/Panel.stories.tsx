import type { Meta, StoryObj } from "@storybook/react";
import { Panel as PanelComponent } from "@layout/Panel";

const meta = {
  component: PanelComponent,
  tags: ["pending"],
} satisfies Meta<typeof PanelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Panel: Story = {};
