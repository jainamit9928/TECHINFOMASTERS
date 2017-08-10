var path = require('path');
var webpack = require("webpack")
var ExtractPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    context: path.resolve('src'),
    entry: ["./js/app.jsx"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: 'public',
        hot: true,
        publicPath: '/public/'

    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            enforce: 'pre',
            test: [/\.js$/],
            exclude: /(node_modules)/,
            loader: 'eslint-loader'
        },
        {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            exclude: /(node_modules)/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        },
        {
            test: /\.(png|jpg|gif|json)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.es6']
    },
    plugins: [
        new CopyWebpackPlugin([{ from: path.resolve('src/assets/'), to: 'assets' }]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractPlugin('style.css')
    ],
}
if (process.env.NODE_ENV === 'development') {
    config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config
