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



// find out staring number of bottles


// if starting bottles is = 0;
// No more bottles of beer on the wall,

var noMore = 'No more bottles of beer on the wall';
var onTheWall = ' bottles of beer on the wall,';
var lineTwo = ' bottles of beer!';
var takeOneDown = 'Take one down and pass it around,';
var lineFour = ' bottles of beer on the wall...';

for ( var i = 5; i > 2; i--) {
	console.log(i + onTheWall);
  console.log(i + lineTwo);
  console.log(takeOneDown);
  console.log(i - 1 + lineFour);
  }
  if(i === 2) {
    console.log(i + onTheWall);
    console.log(i + lineTwo);
    console.log(takeOneDown);
    console.log('1 bottle of beer on the wall...');
    console.log('1 bottle of beer on the wall,');
    console.log(takeOneDown);
    console.log(noMore);
}


// if starting bottles is  = 1,
// concnatenate starting bottle + bottle of beer on th wall;
// concatenate 1 bottle of bear!
// console log take one down and pass it around

// concatenate starting bottles + bottles of beer on the wall,
// cncatenate starting bottles + bottles of beer!
// console log take one down and pass it around (Make a variable b/c it repeats)
// take starting number of bottles -1 (this should be a new variable)
// concnatenate new variable + bottles of beer on the wall,
// concatenaet new variable + bottles of beer!
// console log take one down...
// new variable -1 (this shoudl be a new variable)
// concnatenate new variable + bottles of beer on the wall,
// concatenaet new variable + bottles of beer!
// console log take one down...
