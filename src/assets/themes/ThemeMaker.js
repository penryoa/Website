const Values = require("values.js");

function generatePalette(steps, color) {
  const generator = new Values();
  if (!generator.setColor(color)) {
    return null;
  }

  const palette = generator
    .all(steps)
    .filter(({ weight }) => weight !== 100)
    .reduce(
      (ac, c, index) => ({
        ...ac,
        [(index + 1) * 100]: c.rgbString(),
      }),
      {}
    );

  console.log(palette);

  return palette;
}

generatePalette(20, "#FF775A");

function getColors(base = false) {
  const t = base ? "Base" : "Accent";
  const allColors = {};
  const numAccentColors = 4;
  const colorRanges = base
    ? [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    : [100, 200, 300, 400, 500, 600, 700, 800, 900, "pop"];

  function getRanges(t, colorRanges, aIdx) {
    for (let rIdx = 0; rIdx < colorRanges.length; rIdx++) {
      if (rIdx === 0) {
        allColors[`t${t}${aIdx}`] = {};
      }
      const val = colorRanges[rIdx];
      // TO UPDATE:
      allColors[`t${t}${aIdx}`][val] = `--t${t}${aIdx}-${val}`;
    }
  }

  return {
    ...getRanges(""),
    ...() => {
      for (let aIdx = 1; aIdx <= numAccentColors; aIdx++) {
        getRanges(aIdx);
      }
    },
  };

  return allColors;
}

export default function ThemeMaker(
  themeName, // No spaces permitted here
  baseColor,
  accent1,
  accent2,
  accent3,
  accent4
) {
  const data = ```
  @tailwind base;

  @layer base {
    [data-theme=${themeName}] {
      --tBase-50: 255, 255, 255;
      --tBase-100: 226, 231, 243;
      --tBase-200: 184, 194, 224;
      --tBase-300: 155, 169, 212;
      --tBase-400: 126, 145, 203;
      --tBase-500: 84, 108, 182;
      --tBase-600: 61, 82, 143;
      --tBase-700: 43, 57, 100;
      --tBase-800: 28, 37, 65;
      --tBase-900: 12, 16, 29;
      --tBase-950: 7, 10, 18;
      --tAccent1-100: 247, 225, 221;
      --tAccent1-200: 239, 195, 186;
      --tAccent1-300: 230, 164, 152;
      --tAccent1-400: 222, 134, 117;
      --tAccent1-500: 214, 104, 83;
      --tAccent1-600: 171, 83, 66;
      --tAccent1-700: 128, 62, 50;
      --tAccent1-800: 86, 42, 33;
      --tAccent1-900: 43, 21, 17;
      --tAccent1-pop: 255, 76, 41;
      --tAccent2-100: 211, 230, 230;
      --tAccent2-200: 166, 205, 204;
      --tAccent2-300: 122, 181, 179;
      --tAccent2-400: 77, 156, 153;
      --tAccent2-500: 33, 131, 128;
      --tAccent2-600: 26, 105, 102;
      --tAccent2-700: 20, 79, 77;
      --tAccent2-800: 13, 52, 51;
      --tAccent2-900: 7, 26, 26;
      --tAccent2-pop: 0, 163, 158;
      --tAccent3-100: 241, 217, 230;
      --tAccent3-200: 228, 179, 205;
      --tAccent3-300: 214, 140, 180;
      --tAccent3-400: 201, 102, 155;
      --tAccent3-500: 187, 64, 130;
      --tAccent3-600: 150, 51, 104;
      --tAccent3-700: 112, 38, 78;
      --tAccent3-800: 75, 26, 52;
      --tAccent3-900: 37, 13, 26;
      --tAccent3-pop: 250, 0, 133;
      --tAccent4-100: 220, 237, 232;
      --tAccent4-200: 185, 218, 210;
      --tAccent4-300: 150, 200, 187;
      --tAccent4-400: 115, 181, 165;
      --tAccent4-500: 80, 163, 142;
      --tAccent4-600: 64, 130, 114;
      --tAccent4-700: 48, 98, 85;
      --tAccent4-800: 32, 65, 57;
      --tAccent4-900: 16, 33, 28;
      --tAccent4-pop: 0, 245, 184;
    }
  }
  ```;
  var file = new Blob([data], { type: "css" });
}
