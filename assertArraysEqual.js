const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { // calls eqArray function to determine if two arrays have the same elements
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);; // if true then prints this message to console
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);// if false then prints this message to console
  }
};

module.exports = assertArraysEqual