const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [];
const results3 = takeUntil(data3, x => x === '');

const data4 = [undefined];
const results4 = takeUntil(data4, x => x === undefined);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, []);
assertArraysEqual(results4, []);