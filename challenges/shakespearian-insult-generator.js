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
function shakesperianInsultGenerator() {
i = Math.floor(Math.random() * 50) + 1;
l = Math.floor(Math.random() * 50) + 1;
p = Math.floor(Math.random() * 50) + 1;
var insult = "Hey you " + first_word[i] + " " + second_word[l] + " " + third_word[p] + ".";
return insult;
}
let allwords = first_word.concat(second_word, third_word);

function generateInsult(num) {
  let name = prompt("Who should Shakespeare insult?")
  let allInsults = first_word.concat(second_word, third_word)
  if (num === 1) {
    alert("Why, " + name + " you " + allInsults + "!");
  }
  let insultGenerator = [];
    for (n = 0; n <= (num - 1); n++) {
      insultGenerator.push(allInsults[Math.floor(Math.random() * allInsults.length)]);
    }
      alert("Why, " + name + " you " + insultGenerator.join(', ') + '!')
}
