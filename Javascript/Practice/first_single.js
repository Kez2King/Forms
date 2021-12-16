/**
 * Write a funciton that takes in a lower case string
 *  - Returns the index of the string's first non-repeating character
 *  - If the string only have repeating characters, return -1
 */

// 1. Create a function w/ a parameter of lowercase string
// 2. Check every character in the string
// 3. Check for duplicates
// 4. Count duplicates

function nonRepeat(string){
    let characterCount = {};
    let currentCharacter = null;
    for(let i = 0; i < string.length; i++) {
        currentCharacter = string[i]
        // Check if character in character count
        if(characterCount.hasOwnProperty(currentCharacter)){
            characterCount[currentCharacter].count++
        }else{
            characterCount[currentCharacter] = {count: 1, index: i}
        }
//look through each key in this object
// look to see if number is more than one
//look to see which letter doesnt incriment
//
    }
    Object.keys(characterCount).forEach(function(character){
        // if (characterCount[character].count === 1){
        //     return characterCount[character].index
        // }
    })
    for (let character in characterCount){
        if (characterCount[character].count === 1){
            return characterCount[character].index
        }

    }
    return -1
}

console.log(nonRepeat("pepperroni"))