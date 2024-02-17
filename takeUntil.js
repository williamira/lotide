const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil