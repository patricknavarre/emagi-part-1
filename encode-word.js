const emojiArray = require('./emojis.js');

const encodeWord = function(word) {
    let newStr = '';
    // looping through the word parameter 
    for (let i = 0; i < word.length; i++) {
        // loop within a loop, index can be anything(just a starting point) - looping through the emojiArray
        for (let j = 0; j < emojiArray.length; j++) {
            // checking to see if the letter/word that is being passed 
            // is the same letter thats in the emojiArray and append the symbol to the array
            if (word[i].toLowerCase() === emojiArray[j].letter) {
                newStr += emojiArray[j].symbol;
            }
        }
        // return that new string
    }
    return newStr;
}

module.exports = encodeWord;