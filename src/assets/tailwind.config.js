const colorTheme = require("./themes/default_dark.json");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: colorTheme,
      fontFamily: {
        heading: ["Fugaz One", "cursive"],
        sans: ["Crete Round", "cursive"],
      },
    },
  },
  plugins: [],
};
