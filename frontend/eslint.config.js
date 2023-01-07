const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const FlatCompat = require("@eslint/eslintrc").FlatCompat;

const compat = new FlatCompat();

const config = [
  "eslint:recommended",
  {
    ignores: [".next/**/*"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs["eslint-recommended"].rules,
      ...typescriptPlugin.configs["recommended"].rules,
      ...typescriptPlugin.configs["recommended-requiring-type-checking"].rules,
    },
  },
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("prettier"),
];

module.exports = config;
