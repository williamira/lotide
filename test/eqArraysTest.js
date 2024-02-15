const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Testing is arrays with same value return true
assertEqual(eqArrays([5, 9, 20], ["5", "9", "20"]), false); // testing if array with number and array with those same numbers as strings returns false
assertEqual(eqArrays(["sweet", 9, "hello"], [5, 9, 20]), false);//Testing if arrays with different values return false
assertEqual(eqArrays([], [5, 9, 20]), false); // testing if an empty arry compared to an array with elements returns false
assertEqual(eqArrays([], []), true); // Testing if an empty array compared to an empty array returns true
assertEqual(eqArrays(["hello", "world"], ["hello", "world"]), true);// Testing if two arrays with same strings as values are true