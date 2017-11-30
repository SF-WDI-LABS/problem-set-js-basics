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

function isPalindrome(userInput) {
  var  arrayInput = userInput.split('');

  let toStop = false;

  while (!toStop) {
    toStop = true;
    
    for (var i=0; 2*i < userInput.length; i++) {
    let firstLetter = arrayInput[i];
    let lastLetter = arrayInput[userInput.length-1-i];

    if (firstLetter === lastLetter) {
        console.log("this is a Palindrome")
        toStop = true;

    } else { console.log("this is not a Palindrome")}
  }
  }

  }







