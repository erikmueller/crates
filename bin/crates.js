#!/usr/bin/env node

const chalk = require('chalk')
const { prompt } = require('inquirer')
const fs = require('fs-extra')
const path = require('path')
const installDeps = require('../lib/installDeps')

const error = require('../lib/error')
const createPackageJson = require('../templates/package.json.tmpl')
const createEslintrcJs = require('../templates/eslintrc.js.tmpl')

const [,, nameOrFolder] = process.argv

const dir = path.resolve(process.cwd(), nameOrFolder || '.')
const name = path.basename(dir)

if (fs.pathExistsSync(dir) && fs.readdirSync(dir).length) {
  error({
    message: `Cannot create ${chalk.blue(name)} in "${dir}".`,
    reason: `Path already exists and is not empty.`,
    code: 17 // EEXISTS
  })
}

prompt({
  type: 'confirm',
  name: 'dirCorrect',
  default: true,
  message: `Creating ${chalk.blue(dir)}". Is this correct?`
}).then(({ dirCorrect }) => {
  if (!dirCorrect) return

  prompt([{
    type: 'input',
    name: 'name',
    default: name,
    validate: input => input.length > 0 || "We do need a name!",
    message: 'Please name your new app'
  }, {
    type: 'input',
    name: 'description',
    message: 'Describe it!'
  }, {
    type: 'input',
    name: 'version',
    default: '0.0.1',
    validate: input => input.length > 0 || "We do need a version!",
    message: 'What should the initial version be?'
  }]).then((({name, description, version}) => {
    fs.mkdirpSync(dir)
    fs.writeFileSync(`${dir}/package.json`, createPackageJson({name, version, description}))
    fs.writeFileSync(`${dir}/.eslintrc.js`, createEslintrcJs())

    installDeps({cwd: dir})
  }))
})

