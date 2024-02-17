const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").h, [0]);