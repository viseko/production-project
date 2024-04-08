import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";
import { env } from "process";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html")
};

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  console.log(mode);
  const isDev = (mode === "development");
  const port = env.port || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config;
};