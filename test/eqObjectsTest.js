const assert = require('chai').assert;
const eqObjects = require('../eqObjects');



describe('#eqObjects', () => {
  // to compare two objects with same values ande expect an output of true
  it('returns true when comparing shirtObject, anotherShirtObject', () => {
    const shirtObject = { color: ["red", "blue"], size: "medium" };
    const anotherShirtObject = { size: "medium", color: ["red", "blue"] };
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  // to compare two objects that hav only one difference in properties and expect to return false
  it('returns false when comparing shirtObject, longSleeveShirtObject', () => {
    const shirtObject = { color: ["red", "blue"], size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: ["red", "blue"], sleeveLength: "long" };
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  // To test is false is returned when one object is empty
  it('returns false when comparing shirtObject, emptyObject', () => {
    const shirtObject = { color: ["red", "blue"], size: "medium" };
    const emptyObject = {};
    assert.deepEqual(eqObjects(shirtObject, emptyObject), false);
  });
  // Testing to see if two object with same structure just different valuse in the color array are returned as false
  it('returns false when comparing shirtObject, newShirt', () => {
    const shirtObject = { color: ["red", "blue"], size: "medium" };
    const newShirt = { size: "medium", color: ["yellow", "purple"] };
    assert.deepEqual(eqObjects(shirtObject, newShirt), false);
  });
});