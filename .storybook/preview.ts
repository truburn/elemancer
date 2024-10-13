import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { theme },
      defaultTheme: "theme",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
