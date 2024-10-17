import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@typography/Heading";

const meta = {
  component: Heading,
  args: {
    title: "Heading Title",
    subtitle: "The Subtitle",
  },
  argTypes: {
    depth: {
      control: "select",
      options: [2, 3, 4, 5, 6],
      table: {
        defaultValue: { summary: "2" },
        type: { summary: "2|3|4|5|6" },
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllLevels: Story = {
  argTypes: {
    title: {
      table: { disable: true },
    },
    subtitle: {
      table: { disable: true },
    },
    depth: {
      table: { disable: true },
    },
  },
  render: () => {
    const outline = [
      { depth: 2, subtitle: true },
      { depth: 3 },
      { depth: 4 },
      { depth: 3 },
      { depth: 4 },
      { depth: 2 },
      { depth: 3, subtitle: true },
      { depth: 4 },
      { depth: 4, subtitle: true },
      { depth: 5, subtitle: true },
      { depth: 6 },
      { depth: 4, subtitle: true },
      { depth: 5 },
      { depth: 6, subtitle: true },
      { depth: 2 },
      { depth: 3 },
      { depth: 3 },
    ];

    return (
      <>
        {outline.map(({ depth, subtitle }, idx) => (
          <Heading
            key={idx}
            depth={depth as any}
            title={`Level ${depth} Heading`}
            subtitle={subtitle ? `Level ${depth} Subtitle` : undefined}
          />
        ))}
      </>
    );
  },
};

function HeadingStory(args: any) {
  return (
    <>
      <Heading title={args.title} depth={args.depth} />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
      <Heading title={args.title} subtitle={args.subtitle} depth={args.depth} />
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere
      </p>
    </>
  );
}

export const Level2: Story = {
  render: HeadingStory,
  args: {
    depth: 2,
  },
};

export const Level3: Story = {
  args: {
    depth: 3,
  },
};

export const Level4: Story = {
  args: {
    depth: 4,
  },
};

export const Level5: Story = {
  args: {
    depth: 5,
  },
};

export const Level6: Story = {
  args: {
    depth: 6,
  },
};
