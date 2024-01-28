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

const middle = function(array) {
  let newArr = [];
  if (array.length < 3) {
    return []; // returns nothing if the array has 1 or 2 indexes
  } else if (array.length % 2 !== 0) {
    return [array[(array.length - 1) / 2]]; //push middle element for odd array
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
};

assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArrayEqual(middle([]), []);
assertArrayEqual(middle(["hello", "world"]), []);
assertArrayEqual(middle(["howdy", "partner", "looking"]), ["partner"]);

