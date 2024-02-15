const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { // calls eqArray function to determine if two arrays have the same elements
    console.log(`Assertion passed: ${array1} is equal to ${array2}`); // if true then prints this message to console
  } else {
    console.log(`Assertion failed: ${array1} is not equal to ${array2}`);// if false then prints this message to console
  }
};

module.exports = assertArraysEqual