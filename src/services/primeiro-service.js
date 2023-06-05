const model = require('../model/index.js');

module.exports = {
  async execute() {
    await model.insert({module: 'segundo service'});
    await model.update({module: 'segundo service'});
  }
}