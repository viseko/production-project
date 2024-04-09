import webpack from "webpack";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

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

  return [
    typeScriptLoader,
    cssLoader,
  ]
}