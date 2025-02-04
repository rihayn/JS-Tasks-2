/*1. Array Filter: Create a function that filters an array of numbers to return only 
even numbers.*/

function evenFilter() {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      arr.push(nums[i]);
    }
  }
  console.log("evenNums:" + arr);
}

const nums = [32, 5, 8, 22, 41, 17, 53];
evenFilter();
