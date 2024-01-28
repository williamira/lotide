const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function that takes 2 arrays and compares them and returns a boolean value of true if they are equal and false if they are not.

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([5, 9, 20], ["5", "9", "20"]), false);
assertEqual(eqArrays(["sweet", 9, "hello"], [5, 9, 20]), false);
assertEqual(eqArrays([], [5, 9, 20]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["hello", "world"], ["hello", "world"]), true);
