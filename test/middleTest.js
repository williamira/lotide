const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  // to check that middle element is returned when it is odd number of indexes
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  // to check that the two middle elements get returned from an arry with an even number of indexes
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  // to check if nothing is returned when an empty array is the input
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  // To check if nothing is returned on an array with 2 or less elements
  it("returns [] for ['hello', 'world']", () => {
    assert.deepEqual(middle(['hello', 'world']), []);
  });
  // to check if the middle element gets returned with strings
  it("returns ['partner] for ['howdy', 'partner', 'looking']", () => {
    assert.deepEqual(middle(['howdy', 'partner', 'looking']), ['partner']);
  });
  // To test if original array is not altered by function
  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });
});