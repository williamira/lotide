const map = function(array, callback) {  //function that takes an array and puts each item through a callback function
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // loops through array and puts each item through callback function before pushing it into results array
  }
  return results;  
};

module.exports = map;