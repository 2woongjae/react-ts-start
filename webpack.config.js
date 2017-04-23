var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?minimize"]
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|gif)$/,
                loader: "file-loader?name=[name]_[hash].[ext]"
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}