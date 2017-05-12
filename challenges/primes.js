/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

function isPrime(num) {

  if (num <= 1 || Number.isInteger(num) === false) {
    return false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function primes(max) {
  var arr = [];
  for (var i = 1; i <= max; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
