const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      loaders.JSLoader,
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
};
