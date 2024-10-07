import {
  defaultFontSizes,
  defaultFontWeights,
  FontConstant,
  FontDefinition,
} from "@components/typography/types";
import fontsData from "@constants/fonts.json";
import { Typeset } from "@storybook/blocks";

const fonts = Object.entries(fontsData as FontDefinition);

export function FontStoryBlock() {
  return (
    <>
      {fonts.map(([fontKey, font]: [string, FontConstant]) => (
        <div key={fontKey}>
          <h2 id={`font-${fontKey}`}>
            Font: <code>{fontKey}</code>
          </h2>
          <p>{font.description}</p>
          <p>
            <strong>Key:</strong> {fontKey}
          </p>
          {Object.entries(font.weight ?? defaultFontWeights).map(
            ([weightKey, weight]: [string, number]) => (
              <>
                <h3 id={`font-${fontKey}-${weightKey}`}>
                  Font Weight:{" "}
                  <code>
                    {weightKey} ({weight})
                  </code>
                </h3>
                <Typeset
                  fontFamily={font.fontFamily}
                  fontWeight={weight}
                  fontSizes={Object.values(font.size ?? defaultFontSizes)}
                  sampleText="A very bad quack might jinx zippy fowls."
                />
              </>
            ),
          )}
        </div>
      ))}
    </>
  );
}
