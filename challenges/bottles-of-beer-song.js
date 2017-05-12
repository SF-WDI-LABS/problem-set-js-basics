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
let units = " bottles of beer";
const refrain = "Take one down and pass it around,";

for (let i = 5; i > 0; i--) {
  if (i > 1) {
    console.log(i + units + " on the wall,");
    console.log(i + units + "!");
    console.log(refrain);
    console.log(i - 1 + units + "...\n\r\n\r");
  } else {
    console.log(i + " bottle of beer on the wall,");
    console.log(i + " bottle of beer!");
    console.log(refrain);
    console.log("No more" + units + "...");
  }
}
