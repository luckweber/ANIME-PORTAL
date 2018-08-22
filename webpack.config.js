const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
              options: {
                  includePaths: ["absolute/path/a", "absolute/path/b"]
              }
          }]
      }]
    }
  plugins: [HtmlWebpackPluginConfig]
}
