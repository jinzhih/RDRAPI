module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
  },
};
