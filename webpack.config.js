const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/src/index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'src'),
    compress: true,
    port: 3000,
  }
}