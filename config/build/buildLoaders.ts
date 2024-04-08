import webpack from "webpack"
import { BuildOptions } from "./types/config"

export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.scss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
  };

  return [
    typeScriptLoader,
    cssLoader,
  ]
}