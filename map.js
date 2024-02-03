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
    console.log(`Assertion passed: ${array1} is equal to ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} is not equal to ${array2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const emptyArray = [];
const numbersToDouble = [22, 55, 33, 44, 66];

const map = function(array, callback) {  //function that takes an array and puts each item through a callback function
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // loops through array and puts each item through callback function before pushing it into results array
  }
  return results;  
};

const results1 = map(words, word => word[0]); // to find the firs letter of each word
const results2 = map(emptyArray, element => element.length); // to test on an empty array and retun an empty array
const results3 = map(numbersToDouble, num => num * 2); // to multiply each number by 2



assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArrayEqual(results2, []);
assertArrayEqual(results3, [44, 110, 66, 88, 132]);