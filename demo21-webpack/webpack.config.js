'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TestPlugin = require('./custom/plugins/TestPlugin');
const RemoveCommentsPlugin = require('./custom/plugins/RemoveCommentsPlugin');
const BannerPlugin = require('./custom/plugins/Banner');

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            runtime: 'runtime',
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash:6].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js?$/,
            //     loader: path.resolve('./custom/loaders/my-remove-console-plugin.js'),
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: 'false',
            scriptLoading: 'module',
            name: 'webpack test',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].css',
        }),
        new TestPlugin({
            minify: true,
        }),
        new RemoveCommentsPlugin(),
        new BannerPlugin(),
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        liveReload: true,
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
        }
    }
}