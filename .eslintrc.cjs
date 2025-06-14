module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'vue/no-unused-vars': 'off',
  },
};
