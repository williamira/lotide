// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  // To test the the first element in an array of numbers is returned
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  // To test if the first elemtn in an array with one element is returned
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  // To test if first element in array of strings is returned
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  // to test in undefined is returned in an empty array
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});
