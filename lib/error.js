const chalk = require('chalk')

const error = ({code, message, reason = ''}) => {
  console.error(
    chalk.red('Error'),
    message,
    '\n  ',
    chalk.grey(reason)
  )

  process.exit(code)
}

module.exports = error
