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
var numBottles = prompt("Please enter the number of bottles you'd like.", "1, 2, 3, 4...");
numBottles = parseInt(numBottles);

function bottlesOfBeer(numBottles) {
  for (var i = numBottles;i > 0; i--) {
   if (i===1) {
        alert(i+" bottle of beer on the wall...");
        alert(i+" bottle of beer on the wall,");
        alert(i+" bottle of beer!");
        alert("Take one down and pass it around,");
        alert("No more bottles of beer on the wall!");
      } else if (i>1) {
        alert(i+" bottles of beer on the wall,");
        alert(i+" bottles of beer!");
        alert("Take one down and pass it around,");
        if (i!==2) {
        alert((i-1)+" bottles of beer on the wall..." ) ;
      }
    }
  }
}

bottlesOfBeer(numBottles);
