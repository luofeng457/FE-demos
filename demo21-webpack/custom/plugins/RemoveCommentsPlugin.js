class RemoveCommentsPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation) => {
            for (const name in compilation) {
                // console.log('compilation.assets: ', name, compilation.chunks)
                // const contents = compilation.assets[name].source();
                // const noComments = contents.replace(/\/\/*{2,}\/\s?/g, '');
                // compilation.assets[name] = {
                //     source: () => noComments,
                //     size: () => noComments.length,
                // }
            }
        })
        compiler.hooks.done.tap('RemoveCommentsPlugin', (compilation) => {
        })
    }
}

module.exports = RemoveCommentsPlugin;