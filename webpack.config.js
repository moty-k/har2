const path = require('path')

module.exports = {
    mode: 'development',
    entry: './har2/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(yml|yaml)$/,
                loader: 'js-yaml-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node'
}
