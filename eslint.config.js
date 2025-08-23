import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import parserAstro from "astro-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS + TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // safe here, because it's an array
    ],
  },

  // Astro files
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
    rules: Object.assign(
      {},
      pluginAstro.configs.recommended.rules || {}, // ✅ merge instead of spread
    ),
  },
]);
