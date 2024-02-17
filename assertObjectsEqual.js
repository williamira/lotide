const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion passed🟩🟢💚 ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed🚫🚫🚫 ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const shirtObject = { color: ["red", "blue"], size: "medium" };
// const anotherShirtObject = { size: "medium", color: ["red", "blue"] };


// assertObjectsEqual(shirtObject, anotherShirtObject);

module.exports = assertObjectsEqual;