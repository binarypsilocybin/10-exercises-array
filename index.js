// Import stylesheets
import './style.css';

//https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba

/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
const fill = (arraySize, value) => {
  return Array(arraySize).fill(value);
};

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
const reverse = (array) => {
  throw new Error('Put your solution here');
};
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
