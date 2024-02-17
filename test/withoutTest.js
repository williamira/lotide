const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const shapes = ["square", "triangle", "circle"];
assertArraysEqual(without(shapes, ["triangle"]), ["square", "circle"]);
assertArraysEqual(without([1, 4, 3], [1, 3]), [4]);
assertArraysEqual(without([3], ["hello"]), [3]);
assertArraysEqual(without([3], [-2]), [3]);
assertArraysEqual(without([-5, 7, 24], [-5, 7, 24]), []);