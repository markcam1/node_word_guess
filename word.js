var Letter = require("./letter.js");
var CurrentLetter = new Letter();

var Word = function(wordArray) {
    
    var numBlanks = wordArray.length;

    this.wordArray = wordArray;
    this.wordLoader = () => {
        CurrentLetter.firstrun(numBlanks)
    } ;
    this.displayWord = function(character) {
        var showAll = CurrentLetter.sendCorrectChar(this.wordArray, numBlanks, character );
        return showAll;
    };

    this.checkLetter = function(character) {
        //CurrentLetter.checkWord(this.wordArray, numBlanks, character);
        //console.log("word " + character)
        var passCheck = CurrentLetter.checkWord(this.wordArray, numBlanks, character);
        if (typeof(passCheck) == 'undefined') {
            
            passCheck = false;
            //console.log("passchecker: UNDEFINED ______")
          }
        //console.log("passchecker: " + passCheck)
        return passCheck;

    };
};

module.exports = Word;


// WORKING TEST
// var myWord = new Word(choosenWord);
// myWord.checkLetter("a" )
// myWord.displayWord("a" )


//RETURN FUNCTION
//var charPass = myWord.checkLetter(numBlanks, "z" )
// console.log("passchecker: " + charPass);

//console.log("\n WORD file");
