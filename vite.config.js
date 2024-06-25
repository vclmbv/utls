import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import * as pkg from "./package.json";

const NODE_ENV = process.argv.mode || "development";
const VERSION = pkg.version;

export default defineConfig({
  /* shared */
  define: {
    NODE_ENV: JSON.stringify(NODE_ENV),
    VERSION: JSON.stringify(VERSION),
  },
  plugins: [dts()],

  /* build */
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: "Utls",
      fileName: "utls",
    },
    rollupOptions: { input: "src/index.ts" },
    emptyOutDir: true,
  },
});

/*
 dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
*/
