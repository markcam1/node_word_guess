/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user is attempting to guess. 
That means the constructor should define:

An [array] of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. 
This should call the function on each letter object (the first function defined in Letter.js) 
that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument 
and calls the guess function on each letter object 
(the second function defined in Letter.js)

*/

var Letter = require("./letter.js");
var CurrentLetter = new Letter();

//var choosenWord = "americansamericans"

var Word = function(wordArray) {
    
    var numBlanks = wordArray.length;

    this.wordArray = wordArray;
    this.wordLoader = () => {
        CurrentLetter.firstrun(numBlanks)
        console.log("wordloader ---- word");
        console.log(numBlanks);
        console.log("wordloader ---- word");
    } ;
    this.displayWord = function(character) {
        //CurrentLetter.sendCorrectChar(this.wordArray, numBlanks, character );
        
        var showAll = CurrentLetter.sendCorrectChar(this.wordArray, numBlanks, character );
        console.log("\nWORD____________")
        console.log(wordArray)
        console.log("___________WORD")
        // console.log(showAll)
        // console.log("WORD____________")
        return showAll;
    };

    this.checkLetter = function(character) {
        //CurrentLetter.checkWord(this.wordArray, numBlanks, character);
        console.log("word " + character)
        var passCheck = CurrentLetter.checkWord(this.wordArray, numBlanks, character);
        if (typeof(passCheck) == 'undefined') {
            
            passCheck = false;
            console.log("passchecker: UNDEFINED ______")
          }
        console.log("passchecker: " + passCheck)
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

console.log("\n WORD file");
