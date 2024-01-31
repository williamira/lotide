const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(object, value) {

  for (const key in object) { // loop through object
    if (object[key] === value) { // check to see when an a key in object has the same value as the second argument
      return key; // if it finds one then returns the key of the object
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 99), undefined);