/** @type 
{import('tailwindcss').Config}
*/
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Chicken Scratch", "sans"],
        sans: ["Victor Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
