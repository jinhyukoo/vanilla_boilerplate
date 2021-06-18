const path = require('path')

module.exports = {
  env: {
    browser: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['import', 'prettier', '@babel'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    babelOptions: {
      configFile: path.resolve(__dirname, 'babel.config.json')
    }
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'off'
  }
}
