/* Create a function that takes an array with nested arrays and returns a 
 * single array with all elements included.
 * While running a for loop determine if each element is an array with isArray  * method
*/

const flatten = function(arrayToBeFlattened) {
  let newArr = [];
  for (const element of arrayToBeFlattened) {
    if (Array.isArray(element)) {
      newArr = newArr.concat(element);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = flatten;