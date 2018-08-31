const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ],
};

module.exports = webpackConfig;
