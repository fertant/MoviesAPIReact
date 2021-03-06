const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
};

const CSSLoader = {
  test: /\.css$/i,
  include: path.resolve(__dirname, '../src'),
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../src',
      },
    },
    'css-loader',
  ],
};

const SASSLoader = {
  test: /\.s[ac]ss$/i,
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../src',
      },
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js'),
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          importer: globImporter(),
          outputStyle: 'compressed',
        },
      },
    },
  ],
};

const FontLoader = {
  test: /\.(eot|ttf|woff|woff2)$/i,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    limit: 8192,
  },
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

const JSLoader = {
  test: /\.(js|ts)x?$/,
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
    },
  ],
};

const ESLint = {
  loader: 'eslint-loader',
  options: {
    fix: true,
  },
};

module.exports = {
  SASSLoader,
  CSSLoader,
  FontLoader,
  SVGSpriteLoader,
  ImageLoader,
  JSLoader,
  ESLint,
};
