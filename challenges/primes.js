/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography
http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
*/

// YOUR CODE HERE
function isPrime (n)
{
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

function getPrimes(max) {
    var prime = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!prime[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                prime[j] = true;
            }
        }
    }
    return primes;
}

/*function isPrime(num) {
    for(var i = 2; i < num i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function primes(max){
var  primesArray = [];
  while (i = 0; i < max; i++){
    if isPrime(i)
      primesArray.push(i);
  }
  return primesArray
}
