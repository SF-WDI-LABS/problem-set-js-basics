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

function isPalindrome(str) {

  //modify the string to remove possible punctuation and spaces between the words (for a phrase)
  //and convert to lowercase
  str = str.replace(/\W/gi, '').toLowerCase();

  //reverse the string and store in a new variable
  var reversedStr = str.split("").reverse().join("");

  //check to see if the reversed string is the same, if so it is a Palindrome
  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }

}
