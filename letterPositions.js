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

module.exports = letterPositions;