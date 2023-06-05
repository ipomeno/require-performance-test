function insert(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('inserted data', data);
      resolve(data);
    }, 1000);
  });
}

module.exports = { insert };