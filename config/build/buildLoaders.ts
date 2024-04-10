import webpack from "webpack";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import { use } from "i18next";

export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
  const {
    isDev
  } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = {
    test: /\.scss$/i,
    use: [
      isDev ? "style-loader" : miniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev 
             ? "[path][name]__[local]" 
             : "[hash:base64:5]"
          },
        }
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    typeScriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}