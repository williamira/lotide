# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. It is my first package and the first progect of my coding bootcamp 

## Usage

**Install it:**

`npm install @williamira/lotide`

**Require it:**

`const _ = require('@williamira/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


**To report Bugs**

`Contact author @williamira, email: williamira22@gmail.com`


**License**
License: MIT

**Acknowledgement**
`I want to thank Lighthouse Labs for all the teaching they are giving so I can begin my career as a developer and supporting me to create my first project'


## Documentation

The following functions are currently implemented:

* ### assertArrayEqual(array1, array2)
Takes in two given arrays and log an assertion message to the console if they are equal or not
 
 *Example Call*
 `assertArrayEqual([1, 2, 3], [1, 2, 3])  => "Assertion Passed.."

* ### assertEqual(actual, expected)
  Takes in two values actual and expected and log a message to console asserting if they are equal or not

  *Example Call*
  assertEqual("hello", "hello") => "assertion passed.."

* ### assertObjectEqual(obj1, obj2)
: Takes in two objects and prints a message to console asserting if they are equal or not

  *Example Call*
  assertObjectEqual({name: "william", age: 29}, {name: "william}, age: 29) => "assertion passed"

* ### countLetters(string)
  : Takes a string as an argument and returns an object with a count of each letter in the string and how many iterations of that letter
 
  *Example Call*
  countLetters("hello") => {h: 1, e: 1, l: 2, o: 1}

* ### countOnly(allItems, itemsToCount)
: Takes in two arguments, one of an items and another of which items to count and returns an object of how many of the items to count were in the first variable and the amount of times the names were a value

  *Example Call*
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    expected output {Jason: 1, Fang: 2}


* ### eqArrays(arr1, arr2)
: Takes in two arrays and iterates through each of them to check if they are equal or not and returns true if they are and false if not

  *Example Call*
  eqArrays(["John", "Will", "Cindy"], ["John", "Will", "Cindy"]) => Returns true as both arrays are equal


* ### eqObjects(object1, object2)
: Takes in two objects and goes through them to check if they are equal and will return true and if not equal returns false

    *Example Call*
  const shirtObject = { color: ["red", "blue"], size: "medium" };
    const anotherShirtObject = { size: "medium", color: ["red", "blue"] };
   eqObjects(shirtObject, anotherShirtObject); 

   Expected retrun value to = true as both objects are of equal values;

* ### findKey(object, callback)
: Takes in an object and a callback as arguments and returns a the key that meets the parameters of callback function


  *Example Call*
  const peopleAge = {
      William: 29,
      John: 33,
      Sarah: 44,
      Lucy: 57
    };
    findKey(peopleAge, x => x > 30) 

  Expected the findKey function to return "John"

* ### findKeyByValue(object, value)
: Takes an object and a value as arguments and searchs the object for the value. returns the key-value pair if value is in object

  *Example Call*
  const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine") 

Expected return is "comedy"

* ### flatten(array)
: Takes a multi nested Array and returns a new one dimensional array

  *Example Call*
  flatten([2, [3, 4], [1], 3]) => [2, 3, 4, 1, 3]


* ### head(array)
: takes and array and returns the element at index [0]

  *Example Call*
  head([1, 2, 3, 4]) => 1


* ### letterPositions(string)
: Taks a string an an argument and returns an object with each letter as a key and the indicies that they are found at as a value

  *Example Call*
  letterPositions("hello").e =>  [1];
  letterPositions("hello").l => [2, 3];
  letterPositions("hello").o =>  [4];
  letterPositions("hello").h =>  [0];

* ### map(array, callback)
: Taks an array and a callback as arguments returns a new array in which each element is changed by the parameters of the callback function

  *Example Call*
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]); 

  Expected return to equal => ['g', 'c', 't', 'm', 't']


* ### middle(array)
: takes an array as an argument and returns the middle value for odd numbered arrays and the two middle values for even numbered arrays

  *Example Call*
  middle([1, 2, 3, 4, 5]) 
  Expected output to be => 3


* ### tail
: Takes an array and returns a new array with every element except for the first one

  *Example Call*
  tail([1, 2, 3, 4, 5])

  Expected return to equal => [2, 3, 4, 5]


* ### takeUntil(array, callback)
: Takes an array and a callback as arguments and returns a new array with elements up until the parameters of the callback function are met in which case the code terminates 

  *Example Call*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

expected results1 to have a value of => [1, 2, 5, 7, 2]


* ### without(souce, itemToBeRemoved)
: Takes a source array and an itemToBeRemoved as arguments and retunrs a new array with all elements except the item to be removed.


  *Example Call*
  const shapes = ["square", "triangle", "circle"];
  without(shapes, ["triangle"])

  expected return value to equal => ["square", "circle"]