const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
    plugins: [],
    devServer: {
        port: 5000, 
        open: true,
        static: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
}