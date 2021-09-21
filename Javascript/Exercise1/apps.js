// Create a function that give a name and art
// function madlib(name, subject){
//     return `${name}'s favorite subject in school is ${subject}.`
// }
// Create a variable to print return
// var outCome = madlib("Anushka", "art")
// console.log(outCome)


// Create a funtion that gives a tip and bill amount
// Bill Amount
// var bill = 100
/**
 * Write a function tipAmount
 *  that is given the bill amount and the level of service
 *  (one of good, fair and poor) and
 *  returns the dollar amount for the tip. Based on:
 */

// var goodS = .2
// var fairS = .15
// var badS = .1
// function tipCalc(bill, service){
//     if (service == "good"){
//         return "Your good tip is " + bill*goodS + "."
//     } else if (service == "fair"){
//         return "Your fair tip is " + bill*fairS + "."
//     } else if(service == "bad"){
//         return "Your bad tip is " + bill*badS + "."
//     } else {
//         return "You have decided not to tip."
//     }
// }
// console.log(tipCalc(45, "bad"))

// Write a function tipAmount
// Gives the bill amount and the level of service
// const good = 0.2
// const fair = 0.15
// const bad = 0.1
// function tipAmount(bill, service){
//     if (service == "Good"){
//         tipG = (bill * good)
//         return "Your good tip is " + "$" + tipG + "."
//     } else if (service == "Fair"){
//         tipF = (bill * fair)
//         return "Your fair tip is " + "$" + tipF + "."
//     } else if (service == "Bad"){
//         tipB = (bill * bad)
//         return "Your bad tip is " + "$" + tipB + "."
//     }
//     return service
// }

// function finalAmount(bill, service){
//     if (service == "Good"){
//         total = tipG + bill
//         return "Your total is " + "$" + total + "."
//     } else if (service == "Fair"){
//         total = tipF + bill
//         return "Your total is " + "$" + total + "."
//     } else if (service == "Bad"){
//         total = tipB + bill
//         return "Your total is " + "$" + total + "."
//     }
//     return service
// }
// console.log(tipAmount(55, "Bad") + finalAmount(55, "Bad"))



/*
PRINT NUMBERS
    1. Create a function w/ 
    2. Best to use WHILE or FOR loops
*/
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function printNumbers(start, end){
//     while (start <= end){
//         console.log(start)
//         start +=1   
//     }
// }
// printNumbers(1, 9)

/*
        Ceasar Cipher
    Write a string, an offset, and returns the Ceasar Cipher
*/

// function cipher(string, offset) {
//     let letters = [ 
//         "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
//         "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
//         "u", "v", "w", "x", "y", "z"
//     ]

//     let newString = ""
//     let currentIndex = 0

//     for (currentIndex; currentIndex < string.length; currentIndex++) {
//         newString += letters[offset + letters.indexOf(string[currentIndex])]
//     }
//     return newString
// }
// console.log(cipher("abc", 2))

/**
 * LEETSPEAK
 * 
 * [X] Write a function leetspeak which is given a string, 
 * [X] Returns the leetspeak equivalent of the string.
 * [] To convert text to its leetspeak version, make the following substitutions:
    A => 4
    E => 3
    G => 6
    I => 1
    O => 0
    S => 5
    T => 7
 */

// function leetspeak(word){
//     let currentCharacter = null;
//     let newWord = new Array(word.length)

//     //Counter           |        Condition     | Increment/ Decrement
//     for (let counter = 0; counter < word.length; counter++){
//         // Get access in each character
//         // Check for match to be transformed
//         currentCharacter = word[counter]
//         switch (currentCharacter){
//             case "a":
//                 currentCharacter = 4
//                 break
//             case "e":
//                 currentCharacter = 3
//                 break
//             case "g":
//                 currentCharacter = 6
//                 break
//             case "i":
//                 currentCharacter = 1
//                 break
//             case "o":
//                 currentCharacter = 0
//                 break;
//             case "s":
//                 currentCharacter = 5
//                 break;
//             case "t":
//                 currentCharacter = 7
//                 break;
//             default:
//         }
//         newWord.push(currentCharacter)
//     }
//     return newWord.join("")
// }
// console.log(leetspeak("is a ghost"))

/**
 * Write a function positiveNumbers
 * Gives an array of numbers 
 * Returns a new array containing only the positive numbers within the given array
 */
// Create a function called positiveNumbers
function positiveNumbers(values){
    // Created a variable for the new string to be placed
    newValues =[];
    // Used a For loop to look at each individual number within the array
    for (let index = 0; index < values.length; index++){
        // All positive numbers get added to the new array
        if (values[index] > 0) {
            newValues.push(values[index]);
        } 
        // All negative numbers gets changed into positive numbers
        // Using their absolute values
        else if (values[index] < 0){
            var abVal = Math.abs(values[index]);
            newValues.push(abVal);
        }
    // Return both back to the new array
    }
    return newValues;
};
// Inserta an array of numbers
console.log(positiveNumbers([1, -2, -3, 4, -5, 6, -18]));