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

function isPalindrome(str) {
  var newStr = str.replace(/[^\w\s]/gi, '').replace(/ /g,'').toLowerCase(); //remove punctuation and spaces, convert to lowercas
  let revString = ""
  for (var i = newStr.length - 1; i >= 0; i-= 1 ) {
    revString += newStr[i];
  }

  if (revString == newStr) {
    return true;
  } else {
    return false;
  }
};
