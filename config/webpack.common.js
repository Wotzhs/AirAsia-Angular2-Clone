const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helper = require('./helper.js');


module.exports = {
  entry: {
    'polyfills': './src/polyfill.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  resolve: {
    extensions: [ '', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: [ 'awesome-typescript-loader', 'angular2-template-loader' ]},
      { test: /\.html$/, loader: 'html'},
      { test: /\.css$/, exclude: helper.root('src', 'app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
      { test: /\.css$/, include: helper.root('src', 'app'), loader: 'raw'},
      { test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
      { test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'main', 'vendor', 'polyfills' ]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
