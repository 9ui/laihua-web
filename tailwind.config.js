const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['src/components/**/*.vue', 'src/pages/**/*.vue'],
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover'],
    textColor: ['group-hover', 'hover', 'dark', 'dark-hover', 'dark-active'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    opacity: ['group-hover', 'hover'],
    border: ['hover'],
    width: ['responsive'],
  },
  theme: {
    extend: {
      dark: {
        black: '#121212',
        default: '#222222',
        lighter: '#515151',
        muted: '#7e7e7e',
        shade: '#cfcfcf',
        shadelight: '#e1e1e1',
      },
      colors: {
        primary: colors.red['600'],
        secondary: colors.green['600'],
        shade: {
          default: colors.gray['200'],
          lighter: colors.gray['100'],
        },
        dark: {
          black: '#121212',
          default: '#222222',
          lighter: '#515151',
          muted: '#7e7e7e',
          shade: '#cfcfcf',
          shadelight: '#e1e1e1',
        },
        light: {
          default: colors.gray['200'],
          muted: colors.gray['500'],
          black: colors.gray['700'],
        },
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
};
