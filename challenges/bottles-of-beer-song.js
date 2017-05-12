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
let singSong = [" bottles of beer on the wall,", " bottles of beer!", "Take one down and pass it around,"]

let howManyBottles = prompt("How many bottles should we start with?");

for (let i = howManyBottles; i >= 0; i -= 1) {
  if (i > 1) {
    console.log( i + " " + singSong[0]);
    console.log( i + " " + singSong[0]);
    console.log( i + " " + singSong[1]);
    console.log( singSong[2]);
  } else if ( i === 1) {
    console.log( i + " " + "bottle of beer on the wall.");
    console.log( i + " " + "bottle of beer on the wall.");
    console.log( i + " " + "bottle of beer.");
    console.log( singSong[2]);
    console.log("No more bottles of beer on the wall");
    console.log("No more bottles of beer on the wall");
    console.log("No more bottles of BEER!");
  }
}
