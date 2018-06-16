const webpack = require('webpack');
const path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'public');

module.exports = {
    context: APP_DIR,
    entry: BUILD_DIR + '/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: "js/",
        filename: 'app.bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            useRelativePath: process.env.NODE_ENV === "production"
                        }
                    }
                ]
            }
        ],
    },

}