// scripts/dump-ast.js
const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const generator = require("@babel/generator").default;
const core = require("@babel/core");

const SRC_FILE = "./src/index.ts";
const OUT_AST_JSON = "./dist/ast.json";
const OUT_CODE_JS = "./dist/compiled.js";

console.log(`Parsing file: ${SRC_FILE}`);

try {
  // Step 1: 使用 Babel 先将 TypeScript 编译为 JavaScript
  const result = core.transformFileSync(SRC_FILE, {
    presets: ["@babel/preset-typescript"],
  });

  if (!result || !result.code) {
    throw new Error("Babel transform returned empty code");
  }

  const jsCode = result.code;

  // Step 2: 将 JS 代码写入 dist/compiled.js
  fs.writeFileSync(OUT_CODE_JS, jsCode, "utf8");
  console.log("✅ Compiled JS saved at:", path.resolve(OUT_CODE_JS));

  // Step 3: 解析 JS 代码为 AST
  const ast = parse(jsCode, {
    sourceType: "module",
    plugins: ["typescript"],
  });

  // Step 4: 将 AST 转为 JSON 并保存到文件
  const astJson = JSON.stringify(ast, null, 2);
  fs.writeFileSync(OUT_AST_JSON, astJson, "utf8");
  console.log("✅ AST JSON saved at:", path.resolve(OUT_AST_JSON));
} catch (err) {
  console.error("❌ Error during AST dump:", err.message);
  console.error(err.stack);
}
