const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Create function that takes a string and counts how many times each letter
// is used and returns back an object with each letter and number of instances

const countLetters = function(stringToCount) {
  const letterCounts = {};

  for (const character of stringToCount) {
    if (character !== " ") {
      if (letterCounts[character]) {
        letterCounts[character] += 1;
      } else {
        letterCounts[character] = 1;
      }
    }
  }
  return letterCounts;
};

const result = countLetters("hello people");

assertEqual(result['h'], 1);
assertEqual(result['l'], 3);
assertEqual(result['z'], undefined);
assertEqual(result[' '], undefined);
assertEqual(result['p'], 2);
assertEqual(result[''], undefined);