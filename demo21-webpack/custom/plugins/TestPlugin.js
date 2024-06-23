const pluginName = 'TestPlugin';

class TestPlugin {
    constructor (options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.emit.tap(pluginName, (compilation) => {
            console.log('============webpack emit', this.options);
        })
        compiler.hooks.make.tap(pluginName, (compilation) => {
        })
        compiler.hooks.done.tap(pluginName, (stats) => {
            console.log('============webpack done');
        })
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log('============webpack 正在启动');
        })
    }
}

module.exports = TestPlugin;