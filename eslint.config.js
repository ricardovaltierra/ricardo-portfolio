import js from "@eslint/js";
import globals from "globals";
import pluginAstro from "eslint-plugin-astro";
import parserAstro from "astro-eslint-parser";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    ...js.configs.recommended,
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
    rules: {
      ...pluginAstro.configs.recommended.rules,
    },
  }


  // Optional: React (you’re not using it, but this avoids the warnings)
  pluginReact.configs.flat.recommended,

  // TS support if you add it later
  tseslint.configs.recommended,
]);
