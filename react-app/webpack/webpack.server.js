const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        exclude: /icons\/.*\.svg$/,
        loader: 'file-loader',
        options: {
          name: '/[path][name].[ext]',
        },
      },
    ],
  },
});
