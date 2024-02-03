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


