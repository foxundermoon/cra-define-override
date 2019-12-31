import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/main.ts",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [typescript()]
};
