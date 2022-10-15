const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          use: ['babel-loader'],
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
    ],
    devServer: {
      open: true
    },
    resolve: {
      fallback: {
        path: false,
        buffer: false,
        crypto: false,
        net: false,
        https: false,
        tls: false,
        http: false,
        zlib: false,
        fs: false,
        os: false,
        child_process: false
        
      },
    },
  }
};