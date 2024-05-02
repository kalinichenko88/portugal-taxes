const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    // },
    // colors: {
    //   white: '#ccc',
    //   info: '#3490dc',
    // },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  // daisyui: {
  //   darkTheme: 'dracula',
  //   lightTheme: 'autumn',
  //   themes: ['autumn', 'dracula'],
  // },
};
