
/*Write a function that takes in a sorce array as an input and an array of
 * items to be removed from the sourceArray.
 * The output is to return a new array that has those elements removed without
 * altering the original array.
 * Then test using assertArraysEqual function.
 */

const without = function(source, itemsToBeRemoved) {
  const outputArr = [];
  for (const element of source) {
    if (!itemsToBeRemoved.includes(element)) {
      outputArr.push(element);
    }
  }
  return outputArr;
};

module.exports = without;