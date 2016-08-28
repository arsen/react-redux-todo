var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css?modules!postcss'
    }]
  },

  plugins: [
    // new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
    new HtmlWebpackPlugin({ template: __dirname + "/src/index.html" })
  ],

  postcss: [
    require('autoprefixer')
  ],


  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
