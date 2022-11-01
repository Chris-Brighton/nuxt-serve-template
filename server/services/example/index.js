const { Service } = require('nuxt-serve')
const model = require('./model')
module.exports = (app) => {
  new Service('example', model(app)).configure(app)
}
