// Import stylesheets
import './style.css';

//https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba

//CREATE A NEW ARRAY WITH GIVEN VALUE
const fill = (arraySize, value) => {
  return Array(arraySize).fill(value);
};

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']

//REVERSE ARRAY
const reverse = (array) => {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    reversed.push(array[i]);
  }
  return reversed;
};
const datas = [1, 2, 3];
console.log(reverse(datas)); // [3, 2, 1]

//CLEAR UNNECESSARY ELEMENTS
const compact = (array) => {
  return array.filter(Number);
  //array.filter((number) => number);
};
const datass = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(datass)); // [1, 2, 3]
