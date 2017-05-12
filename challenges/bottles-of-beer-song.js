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
for (var n = 5; n > 0; n--) {
    if (n > 1) {
        console.log(n + " bottles of beer on the wall,");
        console.log(n + " bottles of beer!");
        console.log("Take one down and pass it around,");
        console.log((n-1) + " bottles of beer on the wall");
        // new line src: stackoverflow'how-do-i-create-a-new-line-in-javascript'
        console.log("\n");
    } else {
        console.log(n + " bottle of beer on the wall,");
        console.log(n + " bottle of beer!");
        console.log("Take one down and pass it around,");
        console.log("No more bottles of beer on the wall! Now, buy more.");
    }
}
