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
  http://stackoverflow.com/questions/10346722/how-can-i-split-a-javascript-string-by-white-space-or-comma
https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
*/

// YOUR CODE HERE
function isPalindrome(str) {
let re = /[\W_]/g;
let lowRegStr = str.toLowerCase().replace(re, '');
let reverseStr = lowRegStr.split('').reverse().join('')
return reverseStr === lowRegStr;
}
isPalindrome("A man, a plan, a canal. Panama");
