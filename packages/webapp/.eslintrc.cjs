module.exports = {
  root: true,
  extends: ["@nurdiansyah/devel"],
  ignorePatterns: ["coverage", "libs", "node_modules", "build", "dist", "**/*.svelte", "script"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2020: true,
    node: true
  }
};
