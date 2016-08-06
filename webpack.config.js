var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: './src/get-node-dimensions.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'get-node-dimensions.js',
    sourceMapFilename: 'get-node-dimensions.sourcemap.js',
    library: 'getNodeDimensions',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
    { test: /\.(js)/, loader: 'babel?stage=0' }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js']
  },
};

if (TARGET === 'minify') {
  config.output.filename = 'get-node-dimensions.min.js';
  config.output.sourceMapFilename = 'get-node-dimensions.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
