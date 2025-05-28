// scripts/build-transformed.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const SRC_FILE = "./src/index.ts";
const OUT_FILE = "./dist/transformed.js";

console.log(`Compiling ${SRC_FILE} with Babel and output to ${OUT_FILE}`);

// 使用 babel-cli 将 TypeScript 文件编译为 JS 并应用 Babel 插件
const code = execSync(`npx babel ${SRC_FILE} --out-file ${OUT_FILE}`, {
  encoding: "utf-8",
});

console.log("✅ File generated at:", path.resolve(OUT_FILE));
