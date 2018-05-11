
var Letter = function(chosenWord, numBlanks, character) {

    var blanksAndSuccesses = [];
    this.character = character
    this.letterInWord = false;
    this.firstrun = (numBlanks, wordArray) => {
        blanksAndSuccesses = [];
        for (var i = 0; i < numBlanks; i++) {
            if(wordArray[i] == " "){
              blanksAndSuccesses.push(" ");
            }
            else {
              blanksAndSuccesses.push("__");
            }
          }

    }
    this.sendCorrectChar = function(chosenWord, numBlanks, character) {
        
        if (this.letterInWord) {
            for (var j = 0; j < numBlanks; j++) {
                if (chosenWord[j] === character) {
                    blanksAndSuccesses[j] = character;
                }
            }
            return blanksAndSuccesses.join(" ").toString();;
        }
        else {
            
            return blanksAndSuccesses.join(" ").toString();;
        }
    };
    this.checkWord = function(chosenWord, numBlanks, character) {
        
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] == character) {

                this.letterInWord = true;
                
                return this.letterInWord;
            }
        } 
    };
  };

module.exports = Letter;  