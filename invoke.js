module.exports = handler =>
  new Promise((resolve, reject) =>
    handler({}, {}, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    })
  );
