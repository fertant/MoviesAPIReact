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
        publicPath: '../',
      }
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
        publicPath: '../',
      }
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.resolve('./webpack/'),
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

const JSXLoader = {
  test: /\.(jsx|js)$/,
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          "targets": "defaults" 
        }],
        ['@babel/preset-react', {
          "runtime": "automatic"
        }]
      ]
    }
  }]
};

const TSLoader = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
};

const ESLint = {
  loader: 'eslint-loader',
  options: {
    fix: true
  }
};

module.exports = {
  SASSLoader,
  CSSLoader,
  FontLoader,
  SVGSpriteLoader,
  ImageLoader,
  JSXLoader,
  ESLint,
};
