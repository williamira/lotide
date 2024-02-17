const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  // To test if every element after the first one is returned in an array of numbers
  it("returns [30, 40] for [20, 30, 40]", () => {
    assert.deepEqual(tail([20, 30, 40]), [30, 40]);
  });
  // To test if every element after the first one is returned in an array of strings 
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  // To test if there is only one element in an array that an empty array be returned
  it("returns [] for ['hello']", () => {
    assert.deepEqual(tail(['hello']), []);
  });
  // testing that if there is no elements in an array that an empty element be returned
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});