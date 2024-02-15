const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]); // to check that middle element is returned when it is odd number of indexes
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // to check that the two middle elements get returned from an arry with an even number of indexes
assertArraysEqual(middle([]), []);// to check if nothing is returned when an empty array is the imput
assertArraysEqual(middle(["hello", "world"]), []); // To check if nothing is returned on an array with 2 or less elements
assertArraysEqual(middle(["howdy", "partner", "looking"]), ["partner"]); // to check if the middle element gets returned with strings

