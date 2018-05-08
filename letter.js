
var Letter = function(chosenWord, numBlanks, character) {

    var blanksAndSuccesses = [];
    this.character = character
    this.letterInWord = false;
    this.firstrun = (numBlanks) => {
        blanksAndSuccesses = [];
        for (var i = 0; i < numBlanks; i++) {
           blanksAndSuccesses.push("_");
       };
    //    console.log("FirstRun ---- Letter");
    //    console.log(numBlanks);
    //    console.log(blanksAndSuccesses);
    //    console.log("FirstRun ---- Letter");
    }
    this.sendCorrectChar = function(chosenWord, numBlanks, character) {
        
        if (this.letterInWord) {
            for (var j = 0; j < numBlanks; j++) {
                if (chosenWord[j] === character) {
                    blanksAndSuccesses[j] = character;
                }
            }
            // console.log("\nLETTER-----------");
            // console.log(blanksAndSuccesses);
            return blanksAndSuccesses;
        }
        else {
            
            // console.log("sendChar-Letter--else");
            // console.log(blanksAndSuccesses);
            // console.log("sendChar-Letter--else");
            return blanksAndSuccesses;
        }
    };
    this.checkWord = function(chosenWord, numBlanks, character) {
        
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] == character) {

                this.letterInWord = true;
                
                // console.log("LETTER------checkword")
                // console.log(chosenWord)
                // console.log(character)
                //console.log(this.letterInWord)
                // console.log("\n__________________")
                return this.letterInWord;
            }
        } 
    };
  };

module.exports = Letter;

//console.log("\nletter file");

  