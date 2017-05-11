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
for( var i = 5; i > 0; i--){
  if(i === 1 ){
    console.log(i + " bottle of beer on the wall,"+ i + "  bottle of beer! Take one down and pass it around, no more bottles of beer on the wall!");
  }
  else {
console.log(i + " bottles of beer on the wall,"+ i + "  bottles of beer! Take one down and pass it around," + (i-1) +" bottles of beer on the wall!");
}
}
