module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/jsx-runtime", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "prettier"],
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
