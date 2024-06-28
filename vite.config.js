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
  plugins: [dts({ outDir: "dist/types" })],

  /* build */
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src", "/index.ts"),
      name: "Utls",
      fileName: "utls",
      // formats: ["es", "umd"],
      // formats이 umd인 경우 multi entry를 사용할 수 없음
      // fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["nanoid"],
      output: {
        dir: "./dist",
        globals: { nanoid: "nanoid" },
      },
      input: "src/index.ts",
    },
  },
});

/* 
pro 모드에서 sourcemap을 생성할 필요는 없지만
dev 모드에서 생성할 필요는 있음
아직 어떻게 사용되는지는 알지 못함
*/
