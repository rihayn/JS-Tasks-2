/*1. Array Filter: Create a function that filters an array of numbers to return only 
even numbers.*/

function evenFilter() {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) {
      arr.push(input[i]);
    }
  }
  console.log("evenNums:" + arr);
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenFilter();

/*2. Array Flattening: Create a function that flattens a nested array of any depth. 
Input: [1, [2, [3, [4]], 5]]*/

let res = [];

function flattenNums(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array = array[i];
      flattenNums(array);
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

const input1 = [1, [2, [3, [4]], 5]];
console.log(flattenNums(input1));
