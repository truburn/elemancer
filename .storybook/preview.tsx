import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import GlobalStyles from "../src/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { light, dark } from "../src/styles/theme";
import { allModes } from "./modes";
import { Title, Subtitle, Description, ArgTypes } from "@storybook/blocks";
import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ImportStatement } from "./blocks/ImportStatement";

const preview: Preview = {
  tags: ["autodocs", "autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
        mobile1: allModes.mobile1,
        mobile2: allModes.mobile2,
        tablet: allModes.tablet,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <ImportStatement />
          <Description />
          <h2>Props</h2>
          <ArgTypes />
        </>
      ),
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "components",
          "form",
          "layout",
          "navigation",
          "typography",
          "Theme",
        ],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { light, dark },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
