/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{tsx,css}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '1rem',
      },
    },
    colors: {
      current: colors.currentColor,
      white: colors.white,
      black: colors.white,
      transparent: colors.transparent,

      background: '#f9f4ef',
      button: '#8c7851',
      buttonText: '#fffffe',
      headline: '#020826',
      paragraph: '#716040',

      secondary: '#eaddcf',
      main: '#fffffe',
      highlight: '#8c7851',
      danger: '#f25042',
    },
  },
  plugins: [],
};
