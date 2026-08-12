module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['safari >= 14', 'ios_saf >= 14'],
    },
    "@tailwindcss/postcss": { config: "./src/assets/tailwind.config.js" },
  },
};
