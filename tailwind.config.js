const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

const textColor = {
  primary: generateColorClass("text-primary"),
  "accent-1": generateColorClass("accent-1"),
  "accent-2": generateColorClass("accent-2"),
  "accent-3": generateColorClass("accent-3"),
  "accent-4": generateColorClass("accent-4"),
  "accent-neutral-dark": generateColorClass("accent-neutral-dark"),
  "accent-neutral-medium": generateColorClass("accent-neutral-medium"),
  "accent-neutral-light": generateColorClass("accent-neutral-light"),
};

const backgroundColor = {
  primary: generateColorClass("bg-primary"),
  secondary: generateColorClass("bg-secondary"),
  "accent-1": generateColorClass("accent-1"),
  "accent-2": generateColorClass("accent-2"),
  "accent-3": generateColorClass("accent-3"),
  "accent-4": generateColorClass("accent-4"),
  "accent-neutral-dark": generateColorClass("accent-neutral-dark"),
  "accent-neutral-medium": generateColorClass("accent-neutral-medium"),
  "accent-neutral-light": generateColorClass("accent-neutral-light"),
};

module.exports = {
  // presets: [
  //   require("@tailwindcss/typography"),
  //   require("@tailwindcss/forms"),
  //   require("@tailwindcss/line-clamp"),
  // ],
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor,
      backgroundColor,
    },
  },
  plugins: [],
};
