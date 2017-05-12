/*
  Shakesperian Insult Generator

  You saucy, fly-bitten, minnow, you! Randomly generate some zingers using the supplied list of words!

  Bonuses:
  - Encapsulate your logic in a `generateInsult` function
  - Randomly generate 1 word, 2 word, and n word insults.
  - Generate any number of insults, depending on a user supplied integer. (e.g. generateInsults(3) )
  - Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
  - Create a browser interface, using some combination of `prompt`, `alert`, and/or DOM manipulation.

*/

var first_word = ["yeasty", "weedy", "wayward", "warped", "villainous", "venomed", "vain", "unmuzzled", "tottering", "surly", "spongy", "spleeny", "saucy", "ruttish", "roguish", "reeky", "rank", "qualling", "puny", "puking", "pribbling", "paunchy", "mewling", "mangled", "mammering", "lumpish", "loggerheaded", "jarring", "infectious", "impertinent", "gorbellied", "goatish", "gleeking", "frothy", "froward", "fobbing", "fawning", "errant", "droning", "dissembling", "dankish", "currish", "craven", "clouted", "cockered", "churlish", "bootless", "beslubbering", "bawdy", "artless"];
var second_word = ["weather-bitten", "unchin-snouted", "toad-spotted", "tickle-brained", "tardy-gaited", "swag-bellied", "spur-galled", "sheep-biting", "shard-borne", "rump-fed", "rude-growing", "rough-hewn", "reeling-ripe", "pox-marked", "pottle-deep", "plume-plucked", "onion-eyed", "motley-minded", "milk-livered", "knotty-pated", "ill-nurtured", "ill-breeding", "idle-headed", "hell-hated", "hedge-born", "hasty-witted", "half-faced", "guts-griping", "full-gorged", "fool-born", "folly-fallen", "fly-bitten", "flap-mouthed", "fen-sucked", "fat-kidneyed", "elf-skinned", "earth-vexing", "dread-bolted", "doghearted", "dizzy-eyed", "dismal-dreaming", "crook-pated", "common-kissing", "clay-brained", "clapper-clawed", "boil-brained", "beetle-headed", "beef-witted", "bat-fowling", "base-court"];
var third_word = ["wagtail", "whey-face", "vassal", "varlet", "strumpet", "skainsmate", "scut", "ratsbane", "pumpion", "puttock", "pignut", "pigeon-egg", "nut-hook", "mumble-news", "moldwarp", "miscreant", "minnow", "measle", "mammet", "malt-worm", "maggot-pie", "lout", "lewdster", "joithead", "hugger-mugger", "horn-beast", "hedge-pig", "harpy", "haggard", "gudgeon", "giglet", "fustilarian", "foot-licker", "flirt-gill", "flax-wench", "flap-dragon", "dewberry", "death-token", "codpiece", "coxcomb", "clotpole", "clack-dish", "canker-blossom", "bum-bailey", "bugbear", "boar-pig", "bladder", "barnacle", "baggage", "apple-john"];

// YOUR CODE HERE


/* Bonuses:
- Encapsulate your logic in a `generateInsult` function
- Randomly generate 1 word, 2 word, and n word insults.
- Generate any number of insults, depending on a user supplied integer. (e.g. generateInsults(3) )
- Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
- Create a browser interface, using some combination of `prompt`, `alert`, and/or DOM manipulation.
*/
var name = prompt("What is your name?");
var pickANumber = prompt("Pick a number between 1 and 25");
var userInput = parseInt(pickANumber);
console.log(userInput);

// take the input number (i.e. 10) and generate an insult formula,
// 1) count the number of properties in var third word. do that using some "method"
// 2) find the max number - 1
var numberOfNouns = third_word.length - 1;
// 3) find a javascript property that will generate a random number between that
// 4) make sure the number can be rounded to a whole integer;
// from stackoverflow
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 5) call the array (third_word)  and extract a value using the random number.
var nounChosen = getRandomIntInclusive(0,numberOfNouns);

// go into var third-word and pick a word, this will be the last word;
var finalNoun = third_word[nounChosen];

// 1) now its time to select one word and two words but this is tricky b/c it can depend on n
// 2) if integer = 1, use var finalNoun;

//=========================================
function generateInsults(userInput) {
  if (userInput === 1) {
    alert('Why ' + name + ', you ' + finalNoun);
  }
//  - Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
  // if integer = 2, combine both array first & second and select a random
  else if (userInput === 2) {
    var combinedFirstandSecond = first_word.concat(second_word);
    var numberOfCombinedAdjs = combinedFirstandSecond.length - 1;
    var combinedChosen = getRandomIntInclusive(0,numberOfCombinedAdjs);
    var finalCombined = combinedFirstandSecond[combinedChosen];
    alert('Why ' + name + ', you ' + finalCombined + ' ' + finalNoun + '!');
  }
  // if integer = 3, select one from first and select from second_word
  // if integer > 3, then select odd from first and even from second; until you reach n - 1
  else if (userInput === 3) {
      alert('Why ' + name + ', you ' + finalFirst + ' ' + finalSecond + ' ' + finalNoun + '!');
  }
  else if (userInput >= 4) {
      for(i = 0; i < (userInput - 1); i+=1) {
      var combineForLong = first_word.concat(second_word);
      var combinedMaxLength = combineForLong.length - 1;
      var combinedRandom = getRandomIntInclusive(0,combinedMaxLength);
      longInsult.push(combineForLong[combinedRandom]);
    }
      longInsult.push(finalNoun);
      var finalLong = longInsult.join(" ");
      alert('Why ' + name + ' you ' + finalLong + '!');
//var str = array.join(" "); // 'apple tree'

    }

  }


// longInsult.push(finalFirst);
// longInsult.push(finalSecond);
var longInsult = [];
var numberOfFirst = first_word.length - 1;
var firstChosen = getRandomIntInclusive(0,numberOfFirst);
var finalFirst = first_word[firstChosen];
var numberOfSecond = second_word.length - 1;
var secondChosen = getRandomIntInclusive(0,numberOfSecond);
var finalSecond = second_word[secondChosen];
generateInsults(userInput);
