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
function reverseString(string) {
  var arr = [];
  var str = '';
   arr = string.split('');
   str = arr.reverse().join().replace(/,/g , "");
   var revStr = str.replace(/\s/g , "");
   return revStr;
}

function isPalindrome(str){
  var revStr = reverseString(str);
  var newStr = str.replace(/\s/g , "");
  if( newStr === revStr ){
    return true;
  }
  else {
    return false;
  }
}
