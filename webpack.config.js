const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//sass (o otras cosas mas abajo):
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        //Construccion de alias para no tener necesidad de poner rutas en codigo:
        alias: {
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader'
                }
            ]
            },
            //sass (y tambien deja usar archivos css):
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            //Para que reconozca archivos de imagenes:
            {
                test: /\.(png|svg|jpg|git)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        //sass:
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    //sass:
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    }
}