module.exports = {
  darkMode: 'media',
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    width: {
      120: '300rem',
    },
    extends: {
      shadow: {
        xl: '0 2px 5px 0 rgb(35 36 42 / 20%)',
        '2xl': '0px 10px 24px 0px rgba(35, 36, 42, 0.26)',
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },

  plugins: [require('tailwindcss-dark-mode')(), require('autoprefixer')],
};
