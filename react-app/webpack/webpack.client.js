const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '../src', 'client.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devtool: isDevMod && 'inline-source-map',
  devServer: isDevMod ? {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9001,
    historyApiFallback: true,
    hot: true,
  } : {},
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
