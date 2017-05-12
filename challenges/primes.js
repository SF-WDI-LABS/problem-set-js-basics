/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
let primeArray = [];

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i !== 0) {
      console.log(number + " is prime");
      return true;
    } else {
      return false;
    }
  }
}

function allPrimes(number) {
  for (let i = 2; i < number; i++) {
    if (isPrime(i)) {
    primeArray.push(i);
      console.log(i);
  }
 }
  console.log(primeArray);
}
