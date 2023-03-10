const browserifyPlugin = require('./plugin')
const webpackPlugin = require('./webpackPlugin')
const { groupByFactor } = require('./factor')
const { groupBySize } = require('./size')

module.exports = {
  plugin: browserifyPlugin,
  browserifyPlugin,
  webpackPlugin,
  groupByFactor,
  groupBySize
}
