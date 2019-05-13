const eslintrcJsTemplate = () => (
`const { dependencies } = require('./package.json')

module.exports = {
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: dependencies.react,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    // 'standard',
    'standard-with-typescript',
    'plugin:react/recommended',

    // Let eslint also run prettier...
    'plugin:prettier/recommended',
    // ...and turn off the above's 💅 rules
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    // We have TS for that
    'react/prop-types': ['off'],
  },
}`
)

module.exports = eslintrcJsTemplate
