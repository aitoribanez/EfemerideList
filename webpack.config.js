'use strict'

// const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractSCSS = new ExtractTextPlugin('style.scss')

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: './public/',
    filename: 'app.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    preLoaders: [
      {
        // set up standard-loader as a preloader
        test: /\.js?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract('css!sass')
        loader: extractSCSS.extract(['css','sass'])
      }
    ]
  },
  plugins: [
    extractSCSS
  ],
  standard: {
    // config options to be passed through to standard e.g.
    parser: 'babel-eslint'
  }
}
