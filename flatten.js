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

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed🟩🟢💚 ${array1} is equal to ${array2}`);
  } else {
    console.log(`Assertion failed🚫🚫🚫 ${array1} is not equal to ${array2}`);
  }
};

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
assertArrayEqual(flatten(["hello", "welcome", ["world"], ["music"]]), ["hello", "welcome", "world", "music"]);
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArrayEqual(flatten([2, [], 7, [5, 6]]), [2, 7, 5, 6]);
assertArrayEqual(flatten([]), []);