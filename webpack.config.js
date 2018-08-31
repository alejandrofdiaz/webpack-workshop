const prodConfig = require('./webpack.config.prod.js');
const devConfig = require('./webpack.config.dev.js');

function webpackEnviromentSelector(env) {
  if (env.production) return prodConfig;
  if (env.devConfig) return devConfig;
  return devConfig;
}

module.exports = webpackEnviromentSelector;
