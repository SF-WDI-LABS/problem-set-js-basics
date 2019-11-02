console.log('Loaded primes.js!');
/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
function isPrime(num) {
  if (num < 2) {
    return false
  } else {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
  };
};

function prime(max) {
  var primeArr = [];
  var number = 2;

while (primeArr.length < max) { //loop runs until the length of the array of prime number is equal to max

      let isItAPrime = isPrime(number);
      if (isItAPrime) {
        primeArr.push(number);
    }
    number += 1;
  }
return primeArr
};
