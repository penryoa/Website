function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

function getColors(base = false) {
  const t = base ? "Base" : "Accent";
  const allColors = {};
  const numAccentColors = 4;
  const colorRanges = base
    ? [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    : [100, 200, 300, 400, 500, 600, 700, 800, 900, "pop"];

  function getRanges(aIdx) {
    for (let rIdx = 0; rIdx < colorRanges.length; rIdx++) {
      if (rIdx === 0) {
        allColors[`t${t}${aIdx}`] = {};
      }
      const val = colorRanges[rIdx];
      // If using hex:
      // allColors[`t${t}${aIdx}`][val] = `var(--t${t}${aIdx}-${val})`;
      // If using rgb:
      allColors[`t${t}${aIdx}`][val] = withOpacityValue(
        `--t${t}${aIdx}-${val}`
      );
    }
  }

  if (base) {
    getRanges("");
  } else {
    for (let aIdx = 1; aIdx <= numAccentColors; aIdx++) {
      getRanges(aIdx);
    }
  }
  return allColors;
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...getColors(true),
        ...getColors(),
      },
      fontFamily: {
        heading: ["Fugaz One", "cursive"],
        sans: ["Crete Round", "cursive"],
      },
    },
  },
  plugins: [],
};
