const path = require("path")
const webpack = require("Webpack")

module.exports = {
    entry: './src/client/index.js',
     module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
