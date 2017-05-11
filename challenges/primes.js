/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
// copied code w3resource.com
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(num);



/* 2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
    prime numbers up to, but not exceeding a max number.
*/

// YOUR CODE HERE

function primes(max) {
  // get a number and check to see if it is a prime number
  if (isPrime(max)) {
    var highestPrime = max;
  } else {
    return max - 1;
  }

  while (isPrime(max)) {

  }
  // if it is not, -1 until it is equal to a prime number (put that in variable)
  // then, do a formula that will list all prime numbers starting at 2 and up to prices(max i.e. 127)
  // store those numbers in a variable with a comma,
  // split those values to prepare for an array;
  // put those values into an array

}

primes(128);


//take the input
// check to see if it is a prime number?
// how do we figure that out??
// what is the definition of a prime number? can only be divided by itself;
// 2, 5, 7, 11, 13, 17, 19, 23, etc
// 2, 3, 4, 5, 6, 7, 22, 23;

// %

// 13, 14

// does 13/13

// if x % 2 === 0, not a prime number.
// if x < 2, not a prime number
//
