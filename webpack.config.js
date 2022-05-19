const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const SvgoPlugin = require("./svgo.config")

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

// const optimization = () => {
//   const config = {
//
//   }
//   if(isProd) {
//     config.minimizer = [
//       new CssMinimizerPlugin(),
//       new TerserWebpackPlugin()
//     ]
//   }
//   return config
// }

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/img/[name][ext]"
  },
  devServer: {
    port: 4000,
    hot: isDev
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.jpg', '.css', '.svg'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { SvgoPlugin }],
            ],
          },
        },
      }),
      new CssMinimizerPlugin()
    ],
  },
}