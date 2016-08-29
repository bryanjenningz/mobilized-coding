var HtmlWebpackPlugin = require('html-webpack-plugin')
var htmlPlugin = new HtmlWebpackPlugin({template: './client/index.html', filename: 'index.html', inject: 'body'})

module.exports = {
  entry: ['./client/index.js'],
  output: {path: './dist-client', filename: 'index.js'},
  module: {
    loaders: [{test: /\.js/, exclude: /node_modules/, loaders: ['babel']}]
  },
  plugins: [htmlPlugin]
}
