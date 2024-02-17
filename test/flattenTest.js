const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(flatten(["hello", "welcome", ["world"], ["music"]]), ["hello", "welcome", "world", "music"]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([2, [], 7, [5, 6]]), [2, 7, 5, 6]);
assertArraysEqual(flatten([]), []);