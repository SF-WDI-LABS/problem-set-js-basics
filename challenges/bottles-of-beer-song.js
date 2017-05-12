/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE

let numOfVerses = parseInt(window.prompt("How many verses would you like to hear?"));

for (let i = 5; i > 5 - numOfVerses; i--) {
  if (i > 2) {
      console.log(`${i} bottles of beer on the wall,\n${i} bottles of beer!\nTake one down and pass it around,\n${i - 1} bottles of beer on the wall!`);
  } else if (i === 2) {
      console.log(`${i} bottles of beer on the wall,\n${i} bottles of beer!\nTake one down and pass it around,\n${i - 1} bottle of beer on the wall!`);
  } else {
      console.log(`${i} bottle of beer on the wall,\n${i} bottle of beer!\nTake one down and pass it around,\nNo more bottles of beer on the wall!`);
  }
}
