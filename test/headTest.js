const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5); // To test if the returned value is the first element of array of numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //To test if first element in array of strings is returned 
assertEqual(head([2]), 2); // To test if a array containg only 1 value returns this value
assertEqual(head([]), undefined); // To test if an empty array returns an undefined
assertEqual(head([-2, 2, 22]), -2); // to teat if firts element of arr with negative number is returned
