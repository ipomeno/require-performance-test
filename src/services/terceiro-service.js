const model = require('../model/index.js');

module.exports = {
  async execute() {
    await model.insert({module: 'terceiro service'});
    await model.update({module: 'terceiro service'});
  }
}