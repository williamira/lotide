
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifing what to count
// The function should report back how many instances of each string were found in the allItems array of strings.

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { // if item exists in the itemsToCount object it gets counted into results object
      if (results[item]) {
        results[item] += 1; // if it exists in results object then increment value by 1
      } else {
        results[item] = 1; // if it doesnt exist yet, initilize value 
      }
    }
  }
  return results;
};

module.exports = countOnly;