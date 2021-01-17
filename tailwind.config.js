const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    'src/components/**/*.{vue,js,ts}',
    'src/pages/**/*.vue',
    'src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
      },
    },
  },
};
