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
var CurrentWord = new Word();

var letterArgument = process.argv[2];

var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

var chosenWord = "";
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];
// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;
// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 9;
    // Solution is chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
    // We print the solution in console (for testing).
    console.log(chosenWord);
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
  }






// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "age",
        message: "How old are you?"
      }, {
        name: "language",
        message: "What is your favorite programming language?"
      }
    ]).then(function(answers) {
      // initializes the variable newProgrammer to be a programmer object which will take
      // in all of the user's answers to the questions above
      var newProgrammer = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // printInfo method is run to show that the newProgrammer object was successfully created and filled
      newProgrammer.printInfo();
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run our code
askQuestion();

