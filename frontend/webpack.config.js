const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
    ],
  },
  {
    test: /\.(jpe?g|png|gif|svg|mov)$/i, 
    loader: 'file-loader',
    options: {
      name: '/public/icons/[name].[ext]'
    }
},
{
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
},


],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
 
  ],

};