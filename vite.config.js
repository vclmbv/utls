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
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      exclude: ["node_modules"],
      compilerOptions: {
        /* type checking */
        strict: true,
        /* modules */
        /* interop constraints */
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true, // 대소문자 구별
        isolatedModules: true,
        /* emit */
        declaration: true,
        declarationDir: "./dist/types",
        removeComments: true,
      },
    }),
  ],

  /* build */
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: "Utls",
      fileName: "utls",
    },
    rollupOptions: { input: "src/index.ts" },
    outDir: "./dist",
    emptyOutDir: true,
    sourceMap: true,
    copyPublicDir: false,
  },
});

/*
 dts({
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
*/
