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
function numberOfBottles(numBottles) {

  for (let num = numBottles; num > 0; num -= 1) {
    console.log(num + " bottles of beer on the wall,");
    console.log(num + " bottles of beer");
    console.log("Take one down and pass it around,");
    console.log(num - 1 + " bottles of beer on the wall,");
    console.log();
  }
}
