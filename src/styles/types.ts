import { FontSize, FontWeight } from "@components/typography/types";

export interface ThemeFont {
  family: string;
  weight: Record<FontWeight, number>;
  size: Record<FontSize, number>;
}

export interface ElTheme {
  font: {
    standard: ThemeFont;
    secondary: ThemeFont;
    header: ThemeFont;
    monospace: ThemeFont;
  };
}
