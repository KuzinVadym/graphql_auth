/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  return {
    mode: 'development',
    entry: ['./index'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          exclude: /node_modules|packages/,
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: "css-hot-loader"
            },
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
              }
            },
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({hash: false, template: './index.html'}),
      new webpack.DefinePlugin({
        'process.env.APIKEY': JSON.stringify(process.env.APIKEY),
        'process.env.CLIENTID': JSON.stringify(process.env.CLIENTID),
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        react: path.resolve(path.join(__dirname, './node_modules/react')),
        'babel-core': path.resolve(
            path.join(__dirname, './node_modules/@babel/core'),
        ),
      },
    },
    devServer:{
      historyApiFallback: true
    }
  };
};

