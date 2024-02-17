const assert = require('chai').assert;
const findKey = require('../findKey');


describe('#findKey', () => {
  // to test if undefined is returned when the inputed object is empty
  it('should return undefined when an empty object is the input', () => {
    assert.strictEqual((findKey({}, x => x === 22), undefined));
  });
  // to test that john is returned when parameter in cb() is x > 30
  it('should return John when x > 30 is the paramater', () => {
    const peopleAge = {
      William: 29,
      John: 33,
      Sarah: 44,
      Lucy: 57
    };
    assert.strictEqual(findKey(peopleAge, x => x > 30), "John");
  });
  // to test that an undefined is returned when the parameter in cb() doesn't exist
  it('should return undefined when "purple" is not containe within input object', () => {
    const randomObject = {
      roses: "Red",
      violets: "blue",
      lilies: "orange"
    };
    assert.strictEqual(findKey(randomObject, x => x === "purple"), undefined);
  });
  // to test if noma is returned when the callback parameter searches through number of stars === 2
  it('should return noma when x.stars === 2 is parameter for cb()', () => {
    const newObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    assert.strictEqual(findKey(newObject, x => x.stars === 2), "noma");
  });
})

