const theme = require('./lib/theme')

exports.decorateConfig = config => {
  return Object.assign({}, config, theme(config))
}
