import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export default function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}