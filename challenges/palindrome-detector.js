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

let isPalindrome = function(string){
  let letters = string.split('');
  let length = letters.length; 
  for (i=0;i<string.length;i++){ 
    if (letters[i] != letters[length-1]){
      return false; 

    }
    else{
      return true; 
    }
    length-=1; 
  };
};

isPalindrome("hello"); 

/* check last value against first, second to last against second, etc. 
if any of them don't match, return false for palindrome -- otherwise, it's a palindrome 