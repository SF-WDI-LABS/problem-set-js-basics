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

var numBottles = prompt("How many bottles of beer should we sing?");
var plural;
var remainingBottles;

for (var i = numBottles; i > 0; i--) {
  if (i !== 1) {
    plural = "s";
  } else {
    plural = "";
  }
  if (i == 1) {
    remainingBottles = "No more bottles";
  } else if (i == 2) {
    remainingBottles = "1 bottle";
  } else {
    remainingBottles = (i - 1) + " bottles";
  }
  console.log(`${i} bottle${plural} of beer on the wall,\n${i} bottle${plural} of beer!\nTake one down and pass it around,\n${remainingBottles} of beer on the wall!`);
}
