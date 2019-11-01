console.log('Loaded palindrome-detector.js!');

/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

var isPalindrome = function (word) {
  let arrayOfLetters = word.split("");
  for (let i = 0; i <= arrayOfLetters.length; i++) {
    if(arrayOfLetters[i] === arrayOfLetters[(arrayOfLetters.length - (i + 1))]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

}

isPalindrome("mom");




