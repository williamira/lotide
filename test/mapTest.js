const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const emptyArray = [];
const numbersToDouble = [22, 55, 33, 44, 66];

const results1 = map(words, word => word[0]); // to find the firs letter of each word
const results2 = map(emptyArray, element => element.length); // to test on an empty array and retun an empty array
const results3 = map(numbersToDouble, num => num * 2); // to multiply each number by 2



assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, []);
assertArraysEqual(results3, [44, 110, 66, 88, 132]);