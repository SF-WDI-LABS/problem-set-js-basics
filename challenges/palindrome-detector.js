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


// whats the input/word that we want to check?
// does it have weird symbols
// whether it does or not , strip all non-alpha
// lowercase everything
// get rid of all spaces;
// is there a javscript formual to flip the word?

function isPalindrome(text) {
  var strippedWord = text.replace(/[\W_]/g, ""); //stackoverflow
  var lowercaseWord = strippedWord.toLowerCase();
  var flipWord = lowercaseWord.split('').reverse().join(''); //stackoverflow
  if (lowercaseWord != flipWord) {
    return false;
  } else {
    return true;
  }
}

//a.replace(/[\W_]/g, ""); // stackoverflow



isPalindrome(" adsf&ASDFSADLFJ ASDKF SADKFJ ASDKFJ&&&02I am not :::,,,aslfmommsdfklsj asdlkfjslkf ");
