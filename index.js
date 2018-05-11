
var inquirer = require("inquirer");
var Word = require("./word.js");

wordsList = ["Arkansas","California","San Antonio","Philadelphia","Colorado","New York City","Nebraska","Nevada","New Hampshire","New Jersey","Los Angeles"];
var chosenWord = "";
var numGuesses = 0;
var numToWin = 0;
var lettersInChosenWord = [];
var blanksAndSuccesses = [];
var newGame = false;

function startGame() {
    numGuesses = 3;
    newGame = false;
    blanksAndSuccesses = [];

    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersInChosenWord = chosenWord.split("");
    for (var i = 0; i < lettersInChosenWord.length; i++) {
      if(lettersInChosenWord[i] == " "){
        blanksAndSuccesses.push(" ");
      }
      else {
        blanksAndSuccesses.push("__");
      }
    }
    intialDisplayString = blanksAndSuccesses.join(" ") //.toString();
    console.log(intialDisplayString);
    CurrentWord = new Word(chosenWord);
    CurrentWord.wordLoader();
    askQuestion();
}

const inputReview = value => {
  if (/[A-z]/.test(value)) {
    return true;
  }
  return 'You must enter a Alphabetic letter from A-a to Z-z';
};

var askQuestion = function() {
  if (numGuesses > 0 && newGame !== true) {
    inquirer.prompt([
      {
        name: "name",
        message: "Guess a letter",
        validate: inputReview
      },
    ]).then(function(answers) {
      userLetter = (answers.name).toLowerCase();
      var isChoiceGood = CurrentWord.checkLetter( userLetter )
      var dirtyString = JSON.stringify(CurrentWord.displayWord(userLetter));
      var finalDisplayString = dirtyString.replace(/\"/g, " ").replace(/[\[\]']+/g,'');

      if (!isChoiceGood){
        numGuesses--;
        console.log("You failed miserably. \nGuesses left = " + numGuesses)
      }
      else if (isChoiceGood){
        console.log("Good job, rookie.");
        console.log(finalDisplayString);
        var winWordCheck = finalDisplayString.replace(/[\s]/g, "");
        var chosenWordCHeck = chosenWord.replace(/[\s]/g, "");
        (winWordCheck == chosenWordCHeck) ? (newGame = true) : (console.log("\nAlmost there"));
      }
      askQuestion();
    });
  }
  else if (numGuesses === 0) {
    console.log("\nYOU LOSE");
    console.log("Without losers, where would the winners be?")
    startGame()
  }
  else if (newGame === true) {
    console.log("\n-----NEW WORD-----");
    console.log("It is better to be lucky than wise");
    startGame()
  }
};

startGame();