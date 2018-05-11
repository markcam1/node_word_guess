var Letter = require("./letter.js");
var CurrentLetter = new Letter();

var Word = function(wordArray) {
    
    var numBlanks = wordArray.length;

    this.wordArray = wordArray;
    this.wordLoader = () => {
        CurrentLetter.firstrun(numBlanks, wordArray)
    } ;
    this.displayWord = function(character) {
        var showAll = CurrentLetter.sendCorrectChar(this.wordArray, numBlanks, character );
        return showAll;
    };

    this.checkLetter = function(character) {
        var passCheck = CurrentLetter.checkWord(this.wordArray, numBlanks, character);
        if (typeof(passCheck) == 'undefined') {
            
            passCheck = false;
          }
        return passCheck;

    };
};

module.exports = Word;