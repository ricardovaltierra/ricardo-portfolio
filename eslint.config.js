import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import parserAstro from "astro-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: parserAstro,
      parserOptions: {
        parser: "@typescript-eslint/parser", // fallback for <script> blocks
        extraFileExtensions: [".astro"],
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      astro: pluginAstro,
    },
    rules: {
      ...pluginAstro.configs.recommended.rules,
    },
  }
]);

