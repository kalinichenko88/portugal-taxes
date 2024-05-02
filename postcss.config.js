const postcssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'),
    require('tailwindcss/nesting'),
    postcssPresetEnv({
      features: {
        'nesting-rules': false,
      },
    }),
  ],
};

module.exports = config;
