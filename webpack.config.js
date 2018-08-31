const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;
const distPath = 'dist';

const indextInput = './src/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
  ],
};

module.exports = webpackInitConfig;
