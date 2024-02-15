
// function that takes 2 arrays and compares them and returns a boolean value of true if they are equal and false if they are not.

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // checks to see if both arrays are same length and if not returns false
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // if arrays are same length it cecks to see if each element exists in the other array and if not returns false
      return false;
    }
  }
  return true;
};


module.exports = eqArrays