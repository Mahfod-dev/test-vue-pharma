/**
 * eslint-env node
 *
 * @format
 */

// eslint-disable-next-line no-undef
require("@rushstack/eslint-patch/modern-module-resolution");

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:vitest-globals/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    "vitest/globals/env": true,
  },
};
