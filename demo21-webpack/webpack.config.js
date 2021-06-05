'use strict'
const path = require('path');

module.exports = {
    entry: {
        index: './src/index',
        demo: './src/demo'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash:6].js'
    },
    mode: 'production'
}