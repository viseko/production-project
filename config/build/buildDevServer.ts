import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration} from "webpack-dev-server";

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: options.paths.build,
    },
    open: true,
    port: options.port,
    historyApiFallback: true
  }
}