import { addons } from "@storybook/manager-api";
import theme from "./theme";
import { defaultConfig } from "storybook-addon-tag-badges";

addons.setConfig({
  theme,
  panelPosition: "right",
  tagBadges: [
    {
      tags: "pending",
      badge: {
        text: "Pending",
      },
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    ...defaultConfig,
  ],
});
