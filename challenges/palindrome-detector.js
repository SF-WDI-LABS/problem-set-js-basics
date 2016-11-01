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
var word = prompt("Please input the word you would like analyzed.", " ");
var word2 = word.toString();
var leng = word2.length;
word2 = word2.toLowerCase();

function isPalindrome(word2) {
    for (var i = 0; i < leng/2; i++) {
      if (word2[i] !== word2[leng-1-i]) {
        console.log("false");
        break;
      }
      else {
        console.log("true");
        break;
      }
   }   
}
isPalindrome(word2);
