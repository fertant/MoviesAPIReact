const path = require('path')
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: path.resolve(__dirname, '../src', 'index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      loaders.JSXLoader,
      loaders.SVGSpriteLoader,
      loaders.CSSLoader,
      loaders.SASSLoader,
      loaders.ImageLoader,
      loaders.FontLoader,
      //loaders.ESLint,
    ],
  },
  plugins: [
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
    plugins.HotModuleReplacement,
    plugins.HtmlPlugin,
  ],
}