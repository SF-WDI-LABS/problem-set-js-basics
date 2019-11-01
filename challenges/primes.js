console.log('Loaded primes.js!');
/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

//1. 

let isPrime = function(num) {
  if (num === 2 || num % 2 === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//2.

let primes = function(max) {
  let primeArray = [];
  for (let i = 2; i <= max; i++) {
    if (i === 2 || i % 2 === 1) {
      primeArray.push(i);
    }
  }
  console.log(primeArray);
}
