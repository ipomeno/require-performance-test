const model = require('../model/index.js');

module.exports = {
  async execute() {
    await model.insert({module: 'primeiro service'});
    await model.update({module: 'primeiro service'});
  }
}