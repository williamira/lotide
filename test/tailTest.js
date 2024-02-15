const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([20, 30, 40]);
assertEqual(result.length, 2); // To test if we get back two elements
assertEqual(result[0], 30); // to test if the element at index 0 is = 30
assertEqual(result[1], 40); // to test if the element at index 1 is = 40

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // To test if the original array remains intact after the function is implemented

const newArray = ["Hello"];
assertEqual(tail(newArray).length, 0); // To test if there is only one element in an array that an empty array be returned

const emptyArr = [];
assertEqual(tail(emptyArr).length, 0); // testing that if there is no elements in an array that an empty element be returned
