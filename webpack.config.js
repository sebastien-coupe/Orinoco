const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    home: './src/js/home.js',
    item: './src/js/item.js',
    order: './src/js/order.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};