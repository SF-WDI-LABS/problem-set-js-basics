/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
var n = prompt ("Enter the number ", "1, 2, 3, 4..");
var num = Number(n);

function isPrime(num) {
   var count = 0;
   for ( var i = 2; i < num; i++){
     if(num%i === 0) {
      count++;
     }
     if(count>0){
       return false;
      }
    }
   return true;
 }
isPrime(num);

function primes(max) {

  var primeNums = [];
    for (var i = 2; i<=max; i++) {
      if(i.isPrime()) {
        primeNums.push(i);
      }
    }
}
