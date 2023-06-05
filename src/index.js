console.time('primeiro');
const primeiroService = require("./services/primeiro-service");
console.timeEnd('primeiro');

console.time('segundo');
const segundoService = require("./services/segundo-service");
console.timeEnd('segundo');

console.time('segundo');
const terceiroService = require("./services/terceiro-service");
console.timeEnd('segundo');

(async () => {
  await primeiroService.execute();
  await segundoService.execute();
  await terceiroService.execute();
})();