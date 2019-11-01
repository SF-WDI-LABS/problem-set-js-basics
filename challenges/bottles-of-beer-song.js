console.log('Loaded bottles-of-beer-song.js!');
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

let question = prompt("How many verses do you want to hear?", "Enter a number less than 100");


for (var i = question; i >= 0; i -=1) {
  if (i > 2) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");
} else if (i ===2) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottle of beer on the wall!");
} else if (i === 1) {
  console.log(i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!");
} else if (i === 0) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! None to take down, none to pass it around, no more bottles of beer on the wall!");
}
}