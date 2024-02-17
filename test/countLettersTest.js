const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe('#countLetters', () => {
  // To test if the result object returns true when comparing value of letter 'h' 
  it('should return true for countLetters("hello people"), result["h"], 1', () => {
    const result = countLetters("hello people");
    assert.strictEqual(result["h"], 1);
  });
  // To test if the result object returns true when comparing value of letter ''
  it('should return true for countLetters("hello people"), result["l"], 3', () => {
    const result = countLetters("hello people");
    assert.strictEqual(result["l"], 3);
  });
  // To test if the result object returns true when a letter that is not a part of the result object is compared with undefined
  it('should return true for countLetters("hello people"), result["z"], undefined', () => {
    const result = countLetters("hello people");
    assert.strictEqual(result["z"], undefined);
  });
  // To test if the result object returns true when a space that is not a part of the result object is compared with undefined
  it('should return true for countLetters("hello people"), result[" "], undefined', () => {
    const result = countLetters("hello people");
    assert.strictEqual(result[" "], undefined);
  });
});
