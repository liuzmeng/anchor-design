const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    entry: './examples/main.js',
    demoEntry: './examples/demo/main.js',
    port: 9088,
    cssSourceMap: false,
    publicPath: '',
    subDirectory: 'static'
  },
  build: {
    env: require('./prod.env'),
    productionSourceMap: true,
    publicPath: '',
    subDirectory: 'static'
  }
}
