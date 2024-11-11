//* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//* Return your answer as a number.

const testArr_1 = [9, 3, "7", "3"];
const testArr_2 = ["5", "0", 9, 3, 2, 1, "9", 6, 7];

function sumMixedArray(arr) {
  let result = 0;
  for (const elm of arr) {
    result += +elm;
  }
  return result;
}

console.log(sumMixedArray(testArr_1));
console.log(sumMixedArray(testArr_2));
