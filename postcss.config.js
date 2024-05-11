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
    require('postcss-combine-duplicated-selectors'),
  ],
};

module.exports = config;
