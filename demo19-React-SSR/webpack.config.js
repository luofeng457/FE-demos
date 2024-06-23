const path = require('path');

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
    mode: 'development',
    entry: resolvePath('./src/client/pages/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}