const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  // To check if the name jason returns a value of one in result1
  it('should return true when comparing result1["Jason"],1 ', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Jason"], 1);
  });
  // to test if undefined is the result of inputing a name that doestn exisit in fistNames array
  it('should return true when comparing result1["Karima"], undefined', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Karima"], undefined);
  });
  // to test if fang is found 2 times when countOnly is used on fistNames array
  it('should return true when comparing result1["Fang"], 2', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Fang"], 2);
  });
  // To test if undefined is the result of looking for the value of a name that is false in items to count object
  it('should return true when comparing result1["Agouhanna"], undefined', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});