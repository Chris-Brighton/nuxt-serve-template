const { Service } = require('nuxt-serve')
module.exports = (app, name, model) => {
  return new Service(name, model(app)).configure(app)
}
