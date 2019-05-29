const install = require('yarn-install')

const dependencies = [
    "@emotion/core",
    "@emotion/styled",
    "@material-ui/core",
    "@material-ui/icons",
    "@reach/router",
    "react",
    "react-dom",
    "react-jss",
]

const devDependencies = [
    "@babel/core",
    "@babel/plugin-proposal-class-properties",
    "@babel/preset-env",
    "@babel/preset-react",
    "@types/jest",
    "@types/reach__router",
    "@types/react-dom",
    "@types/react-jss",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "babel-core",
    "babel-jest",
    "eslint",
    "eslint-config-prettier",
    "eslint-config-standard",
    "eslint-plugin-import",
    "eslint-plugin-node",
    "eslint-plugin-prettier",
    "eslint-plugin-promise",
    "eslint-plugin-react",
    "eslint-plugin-standard",
    "jest",
    "parcel-bundler",
    "prettier",
    "react-testing-library",
    "ts-jest",
    "typescript"
]

const installDeps = opts => {
  install({deps: dependencies, ...opts})
  install({deps: devDependencies, dev: true, ...opts})
}

module.exports = installDeps
