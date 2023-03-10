const Webpack = require('webpack')
// const WebpackSources = require('webpack-sources')
// const { RawSource } = WebpackSources
const { Compilation } = Webpack

// const { createForEachStream, ModuleGroup } = require('./util')

const PLUGIN_NAME = 'BifyModuleGroupsPlugin'

class BifyModuleGroupsPlugin {
  constructor (opts) {
    this.label = opts.label || 'primary'
  }

  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
  apply (compiler) {
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapPromise({
        name: PLUGIN_NAME,
        // stages: https://webpack.js.org/api/compilation-hooks/#list-of-asset-processing-stages
        stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT
      }, assets => this.hook(compilation, assets)
      )
    })
  }

  async hook (compilation, _assets) {
    // const primaryGroup = new ModuleGroup({ label })
    console.log('ZHERP1', compilation)
    // for (const chunk of compilation.chunks) {
    // for (const module of compilation.chunkGraph.getChunkModulesIterable(chunk)) {
  }
}

module.exports = BifyModuleGroupsPlugin
