/**
 * Webpack configuration for React and extra css with Stylus and files
 * plugins for jQuery and momentjs, for any other library just add the necessary plugins
 */

'use strict';

const
  webpack = require('webpack');

var config = {
  context : __dirname + '/src',
  entry   : [
    './index.js'
  ],
  output  : {
    path      : __dirname + '/public',
    filename  : 'index.bundle.js'
  },

  plugins : [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      moment : "moment"
    })
  ],

  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : ['es2015', 'react']
        }
      },
      { test : /\.css$/, loader : 'style!css' },
      { test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file' },
      { test : /\.jpe?g$|\.bmp$|\.gif$|\.png$/i, loader: "url" }
    ]
  }
};

// source maps for code inspection in the browser

config.devtool = 'source-map';

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;