const packageJsonTemplate = ({name, version, description = ''}) => `{
  "name": "${name}",
  "version": "${version}",
  "description": "${description}",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest",
    "pretest": "yarn lint",
    "fixlint": "yarn lint --fix",
    "lint": "eslint src/**/*.{ts,tsx}"
  },
  "author": "",
  "license": "ISC",
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  },
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "trailingComma": "all"
  },
  "jest": {
    "preset": "ts-jest/presets/js-with-babel",
    "testEnvironment": "jsdom",
    "collectCoverageFrom": [
    "src/**/*.{ts,tsx}"
    ]
  }
}`

module.exports = packageJsonTemplate
