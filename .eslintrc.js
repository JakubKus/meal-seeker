module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-array-index-key': 0,
    'react/button-has-type': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/function-component-definition': 0,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
  },
};
