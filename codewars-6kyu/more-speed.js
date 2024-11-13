//* Write a function that will take in any array and reverse it.

//* Sounds simple doesn't it?

//* NOTES:

//* Array should be reversed in place! (no need to return it)
//* Usual builtins have been deactivated. Don't count on them.
//* You'll have to do it fast enough, so think about performances

const reverseInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

const test1 = [1, 2, 3, 4];
const test2 = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseInPlace(test1));
