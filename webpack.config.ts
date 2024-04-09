import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
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