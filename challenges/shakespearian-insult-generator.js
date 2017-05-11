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
    console.log('You ' + finalNoun);
  }
  // if integer = 2, combine both array first & second and select a random
  if (userInput === 2) {
    var combinedFirstandSecond = first_word.concat(second_word);
    var numberOfCombinedAdjs = combinedFirstandSecond.length - 1;
    var combinedChosen = getRandomIntInclusive(0,numberOfCombinedAdjs);
    var finalCombined = combinedFirstandSecond[combinedChosen];
    console.log('You ' + finalCombined + " " + finalNoun);
  }
  // if integer = 3, select one from first and select from second_word
  // if integer > 3, then select odd from first and even from second; until you reach n - 1
  if (userInput === 3) {
      console.log('You ' + finalFirst + " " + finalSecond + " " + finalNoun);
  }
  if (userInput >= 4) {
  // take the user input # and -1 b/c need to reserve last spot for noun.
    var longInsult = [];
    longInsult.push(finalFirst);
    longInsult.push(finalSecond);
    console.log(longInsult.length);
  // get a random number
  // do a loop starting at 3 and ending at input
  // select odd and even
  // reserve last spot for noun;
  // maybe two for loops, one for even, and one for odd,
  

  }

}

var numberOfFirst = first_word.length - 1;
var firstChosen = getRandomIntInclusive(0,numberOfFirst);
var finalFirst = first_word[firstChosen];
var numberOfSecond = second_word.length - 1;
var secondChosen = getRandomIntInclusive(0,numberOfSecond);
var finalSecond = second_word[secondChosen];

generateInsults(4);
