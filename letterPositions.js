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
    console.log("Assertion passed🟩🟢💚");
  } else {
    console.log("Assertion failed🚫🚫🚫");
  }
};


// a function to return the indexed location of each letter in a string
// takes a string as argument
// loops through string and adds each character to an array nested within an object
// and adds the index number the letter is found on

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {  // to skip spaces
      if (!result[character]) { // to chech if the character already exists within the object result
        result[character] = []; // If not found it creates an array for values to be pushed for each character
      }
      result[character].push(i);  // value gets pushed to character array in result object
    }
  }

  return result;
};




assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").h, [0]);