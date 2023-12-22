/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 0
fibonacci(2); // 1
fibonacci(3); // 1
fibonacci(4); // 2
fibonacci(5); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(n, sum = [0,1]) {
  if (n === 0) {
    return sum[1];
  }

  if (n === 1) {
    return sum[1]
  }

  let prev = sum[0];
  let next = sum[1];
  sum.push(prev + next);
  sum.shift();

  return fibonacci(n - 1, sum)
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
// fibonacci(10); // 55

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
