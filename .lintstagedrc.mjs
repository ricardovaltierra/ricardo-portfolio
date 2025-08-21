// .lintstagedrc.mjs

/** @type {import("@commitlint/config-conventional").Config} */
export default {
    "*.{js,ts,jsx,tsx,astro}": "eslint --fix",
    "*.md": "markdownlint --fix",
    "*.{css,scss}": "stylelint --fix",
  };