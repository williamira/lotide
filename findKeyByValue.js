const findKeyByValue = function(object, value) {

  for (const key in object) { // loop through object
    if (object[key] === value) { // check to see if a key in  the object has the same value as the second argument
      return key; // if it finds one then returns the key of the object
    }
  }
};

module.exports = findKeyByValue;

