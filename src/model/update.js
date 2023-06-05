function update(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('updated data', data);
      resolve(data);
    }, 1000);
  })
}

module.exports = { update };
