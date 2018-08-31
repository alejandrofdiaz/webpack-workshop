const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;
const distPath = 'dist';

const indextInput = './src/index.html';
const indexOutput = 'index.html';
 
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    plugins: [
      new HTMLWebpackPlugin({
          filename: indexOutput,
          template: indextInput,
      })
  ]
};
 
module.exports = webpackInitConfig;