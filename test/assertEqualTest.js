const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // To test if two different strings are the same
assertEqual(1, 1); // To test if two same numbers return truthy value
assertEqual(2, 22); // To test if assertion fail comes with two different numbers
assertEqual("Life", "Life"); // To test if identical string returns passing assertion
assertEqual(-1, -1); // To test if identical negative numbers return a passed assertion
assertEqual("22", 3); // To check if a string being compared to a number return a failed assertion
assertEqual(-4, 4); // to test if a negative and positve number that are the same return a failed assertion

