const path = require('path')

module.exports = {
    mode: 'production',

    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port:"3030",
        hot:true,
        open:true
    },

    module: {
        rules:[
            {
                test: /\.js(x?)$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                loader:'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
        extensions: ['.js','.ts','.tsx']
    }

}