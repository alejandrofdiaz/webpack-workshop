const path = require('path');
 
const basePath = __dirname;
const distPath = 'dist';
 
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
    }
};
 
module.exports = webpackInitConfig;