module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // Set the desired indentation rule to 2 spaces
    indent: ['error', 2],

    "no-console": "warn",
    //* Avoid Bugs
    "no-undef": "error",
    "semi": "error",
    "semi-spacing": "error",

    //* Best Practices
    "eqeqeq": "warn",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-constant-condition": "warn",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "req|res|next|__" }],
    //
    "max-len": ["error", { "code": 200 }],
    "max-lines": ["error", { "max": 500 }],
    "keyword-spacing": "error",
    "multiline-ternary": ["error", "never"],
    "no-mixed-operators": "error",
    //
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { "allowAllPropertiesOnSameLine": true }
    ],
    //* ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "off",
    "prefer-const": "error",
    "prefer-template": "warn",
  }
};
