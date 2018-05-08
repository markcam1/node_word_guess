/*
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses

Letter.js should not require any other files.
Word.js should only require Letter.js
HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

*/

var inquirer = require("inquirer");
var Word = require("./word.js");
//var CurrentWord = new Word();


//var letterArgument = process.argv[2];

//var wordsList = ["america", "fuckfuck", "dada"];
var wordsList = ["abc", "xyz", "dada"];
// wordsList = ["america", "presidentdonaldjtrump", "abc"];
var chosenWord = "";
// chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

//var chosenWord = "america";
var numGuesses = 0;
var numToWin = 0;

var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
//var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
// var wrongGuesses = [];
// // Game counters
// var winCounter = 0;
// var lossCounter = 0;
// var numGuesses = 9;
var newGame = false;



// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {

    // Reset the guesses back to 0.
    numGuesses = 3;
    newGame = false;
    // Solution is chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numToWin = lettersInChosenWord.length;
    // We print the solution in console (for testing).
    for (var i = 0; i < numToWin; i++) {
      blanksAndSuccesses.push("_");
    }
    intialDisplayString = blanksAndSuccesses.toString();
    firstDisplayString = intialDisplayString.replace(/_/g, " _ ") //.replace(/[\[\]']+/g,'');

    console.log("startGame (-)");
    console.log(chosenWord);

    console.log(firstDisplayString);

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
  //CurrentWord = new Word(chosenWord);
  // if statement to ensure that our questions are only asked five times
  if (numGuesses > 0 && newGame !== true) {
    
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
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
        console.log("FAIL index " + numGuesses)
      }
      else if (isChoiceGood){
        console.log("GOOD CHOICE index.js ++++++++++++");
        console.log(finalDisplayString);

        var winWordCheck = finalDisplayString.replace(/[\s,]/g, "");
        (winWordCheck == chosenWord) ? (console.log("TRUE WINGAME"), newGame = true) : (console.log("FALSE WINGAME"));
      }
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
    startGame()
  }
};

startGame();
  

