const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed🟩🟢💚 ${array1} is equal to ${array2}`);
  } else {
    console.log(`Assertion failed🚫🚫🚫 ${array1} is not equal to ${array2}`);
  }
};


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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const shapes = ["square", "triangle", "circle"];
assertArraysEqual(without(shapes, ["triangle"]), ["square", "circle"]);
assertArraysEqual(without([1, 4, 3], [1, 3]), [4]);
assertArraysEqual(without([3], ["hello"]), [3]);
assertArraysEqual(without([3], [-2]), [3]);
assertArraysEqual(without([-5, 7, 24], [-5, 7, 24]), []);