const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// A function to return the first element of an array

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head([]), undefined);
assertEqual(head(["William", "Andrea", "Jordan"]), "William");
assertEqual(head([-2, 2, 22]), -2);
