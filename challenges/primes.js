/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//console.log(isPrime(5));

function maxPrimes(n) {
  var arr = [];

  for (var i = 1; i < n; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(maxPrimes(20));
