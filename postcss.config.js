const postcssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-autoreset'),
    require('postcss-sorting'),
    postcssPresetEnv({
      features: {
        'nesting-rules': false,
      },
    }),
  ],
};

module.exports = config;
