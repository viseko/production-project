import webpack from "webpack"
import { BuildOptions } from "./types/config"

export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
  ]
}