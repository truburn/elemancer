import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle as PageTitleComponent } from "@typography/PageTitle";

const meta = {
  component: PageTitleComponent,
} satisfies Meta<typeof PageTitleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTitle: Story = {};
