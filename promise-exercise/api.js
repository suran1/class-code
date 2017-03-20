module.exports = {
  getName: function (cb) {
    setTimeout(function () {
      cb(null, 'Fluffykins');
    }, 500);
  }
};
