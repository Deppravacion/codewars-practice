// ??In mathematics, the factorial of a non-negative integer n,
//  ?denoted by n!, is the product of all positive integers less
//  ? than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.
//  ? By convention the value of 0! is 1.

// ?Write a function to calculate factorial for a given input.
// ? If input is below 0 or above 12 throw an exception of type
// ?  ArgumentOutOfRangeException (C#) or IllegalArgumentException
// ?   (Java) or RangeException (PHP) or throw a RangeError
// ?   (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  let result = n;
  if (n < 0 || n > 12) throw new RangeError("out of bounds");
  if (n === 0 || n === 1) return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}

factorial(3);
factorial(5);
console.log(factorial(5));
console.log(factorial(55));
