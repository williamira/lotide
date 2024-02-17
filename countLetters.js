
// Create function that takes a string and counts how many times each letter
// is used and returns back an object with each letter and number of instances

const countLetters = function(stringToCount) {
  const letterCounts = {};

  for (const character of stringToCount) {

    if (character !== " ") { // to ignore spaces
      if (letterCounts[character]) {
        letterCounts[character] += 1; // increments value of characters each time a repeted character is looped over
      } else {
        letterCounts[character] = 1; // initilizes value of each character if not already present in letterCounts object
      }
    }
  }
  return letterCounts;
};

module.exports = countLetters;