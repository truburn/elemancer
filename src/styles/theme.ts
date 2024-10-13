import {
  defaultFontSizes,
  defaultFontWeights,
  FontDefinition,
} from "@components/typography/types";
import fontData from "@constants/fonts.json";
import type { Theme } from "@emotion/react";
import { ThemeFont } from "@styles/types";

const fonts: FontDefinition = fontData;
// Use the standard font for any other font group that is not defined
const DEFAULT_FONT: ThemeFont = {
  family: fonts.standard.fontFamily,
  weight: {
    ...defaultFontWeights,
    ...(fonts.standard.weight ?? {}),
  } as ThemeFont["weight"],
  size: {
    ...defaultFontSizes,
    ...(fonts.standard.size ?? {}),
  } as ThemeFont["size"],
};

export default {
  font: {
    standard: DEFAULT_FONT,
    secondary: {
      family: fonts.secondary?.fontFamily ?? DEFAULT_FONT.family,
      weight: {
        ...DEFAULT_FONT.weight,
        ...(fonts.secondary?.weight ?? {}),
      },
      size: {
        ...DEFAULT_FONT.size,
        ...(fonts.secondary?.size ?? {}),
      },
    },
    header: {
      family: fonts.header?.fontFamily ?? DEFAULT_FONT.family,
      weight: {
        ...DEFAULT_FONT.weight,
        ...(fonts.header?.weight ?? {}),
      },
      size: {
        ...DEFAULT_FONT.size,
        ...(fonts.header?.size ?? {}),
      },
    },
    monospace: {
      family: fonts.monospace?.fontFamily ?? DEFAULT_FONT.family,
      weight: {
        ...DEFAULT_FONT.weight,
        ...(fonts.monospace?.weight ?? {}),
      },
      size: {
        ...DEFAULT_FONT.size,
        ...(fonts.monospace?.size ?? {}),
      },
    },
  },
} as Theme;
