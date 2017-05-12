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

// 1. make the input lower case "Amore, Roma." -> "amore, roma."
// 2. split "amore, roma." -> ["a", "m", "o", "r", "e", ",", " ", "r",.. ]
// 3. get rid of all the punctuations and space -> ["a", "m", "o", "r", "e", "r",.. ]
// 4. check if it's a palindrome

function isPalindrome(userInput) {
  let removeThese = [",", ".", ":", "!", ";", "?", " "];
  let letterArray = userInput.toLowerCase().split("");
  for ( let i = 0; i < letterArray.length; i++ ) {
    if (removeThese.includes(letterArray[i])) {
      letterArray[i] = "";
    }
  } // end of for loop
  modifiedWord = letterArray.join("");
  reversedWord = letterArray.reverse().join("");
  if (modifiedWord === reversedWord) {
    return true;
  } else {
    return false;
  }
} // end of isPalindrome function
