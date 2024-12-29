import type { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from "@components/SearchBox";

const meta = {
  component: SearchBox,
  title: "components/SearchBox",
  tags: ["pending"],
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TempStory: Story = {};
