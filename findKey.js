const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const peopleAge = {
  William: 29,
  John: 33,
  Sarah: 44,
  Lucy: 57
};

const randomObject = {
  roses: "Red",
  violets: "blue",
  lilies: "orange"
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({}, x => x === 22), undefined)
assertEqual(findKey(peopleAge, x => x > 30), "John")
assertEqual(findKey(randomObject, x => x === "purple"), undefined)