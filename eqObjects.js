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




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟢🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔🛑🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


const shirtObject = { color: ["red", "blue"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red", "blue"] };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const emptyObject = {};
assertEqual(eqObjects(shirtObject, emptyObject), false);

const newShirt = { size: 22, color: ["yellow", "purple"]}

assertEqual(eqObjects(newShirt, anotherShirtObject), false)