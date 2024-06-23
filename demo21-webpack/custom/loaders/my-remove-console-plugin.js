const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const { transformFromAst } = require('@babel/core');

module.exports = function (source, map) {
    const ast = parser.parse(source, {
        sourceType: 'module',
    });

    traverse(ast, {
        CallExpression (path) {
            if (t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, { name: 'console' })) {
                // console.log('path==== ', path.node)
                path.remove();
            }
        }
    });

    const { code } = transformFromAst(ast, null, {});

    return code;
}