const eqArrays = require('./eqArrays')


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2);

  if (object1Array.length !== object2Array.length) { // checks if the two arrays created are same length
    return false;
  }
  for (const key of object1Array) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // to check if any of the values are arrays
      if (!eqArrays(object1[key], object2[key])) { // to check if those arrays are equal
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) { // to check if values are primitives and not equal
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
