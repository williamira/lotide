const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // to test is two arrays are containg equal elements 
assertArraysEqual([1, 2,], [1, 2, 3]); // to test if we recieve a failed assertion for having two arrays with different elements
assertArraysEqual([], []); //to test if two empty arrays pass the assertion
assertArraysEqual(["Hello", "World"], ["hello", 'world']); // to test if arrays with very similar strings fail for capitilization
assertArraysEqual([2], ["2"]); // To test if a number and string of that number fail assertion