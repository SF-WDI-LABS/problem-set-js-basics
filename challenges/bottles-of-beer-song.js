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
console.log(numBottles);

function bottlesOfBeer(numBottles) {
  for (var i = numBottles;i > 0; i--) {
    alert(i+" bottles of beer on the wall,");
    alert(i+" bottles of beer!");
    alert("Take one down and pass it around,");
    alert((i-1)+" bottles of beer on the wall..." );
  }
}

bottlesOfBeer(numBottles);
