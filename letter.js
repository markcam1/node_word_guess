/*
Letter.js: Contains a constructor, Letter. 
This constructor should be able to either display an underlying character 
or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. That means the constructor should define:

A string value to store the underlying character for the letter
A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, 
or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, 
updating the stored boolean value to true if it was guessed correctly
*/

// var numBlanks = 7;
// var lettersInChosenWord = [];
var blanksAndSuccesses = [];
// var myWord = "abcdefg"
// lettersInChosenWord = myWord.split("");
// numBlanks = lettersInChosenWord.length;

var Letter = function(chosenWord, numBlanks, character) {
    this.character = character
    this.letterInWord = false;
    this.sendCorrectChar = function(chosenWord, numBlanks, character) {
        for (var i = 0; i < numBlanks; i++) {
            blanksAndSuccesses.push("_");
        }
        if (this.letterInWord) {
            for (var j = 0; j < numBlanks; j++) {
              if (chosenWord[j] === character) {
                blanksAndSuccesses[j] = character;
              }
            }
            console.log("true maker");
            console.log(blanksAndSuccesses);
        }
    };
    this.checkWord = function(chosenWord, numBlanks, character) {
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === character) {
              this.letterInWord = true;
              
              //return this.letterInWord;

              console.log(chosenWord)
              console.log(character)
              console.log(this.letterInWord)
              console.log("\n__________________")
            }
        } 
    };
  };

module.exports = Letter;
// var MyLetter = new Letter();
// MyLetter.checkWord(myWord, numBlanks, "z" )
// MyLetter.sendCorrectChar(myWord, numBlanks, "z" )

console.log("\nletter file");

  