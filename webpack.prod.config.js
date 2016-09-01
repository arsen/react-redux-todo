var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendors: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'firebase',
      'react-tap-event-plugin',
      'material-ui/TextField',
      'material-ui/RaisedButton',
      'material-ui/styles/MuiThemeProvider',
      'material-ui/Paper',
      'material-ui/Tabs',
      'material-ui/List',
      'material-ui/Checkbox',
      'material-ui/svg-icons/action/delete',
      'material-ui/IconButton',
      'material-ui/Dialog',
      'material-ui/FlatButton',
    ]
  },

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
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
