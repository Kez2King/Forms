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
const good = 0.2
const fair = 0.15
const bad = 0.1
function tipAmount(bill, service){
    if (service == "Good"){
        tipG = (bill * good)
        return "Your good tip is " + "$" + tipG + "."
    } else if (service == "Fair"){
        tipF = (bill * fair)
        return "Your fair tip is " + "$" + tipF + "."
    } else if (service == "Bad"){
        tipB = (bill * bad)
        return "Your bad tip is " + "$" + tipB + "."
    }
    return service
}

function finalAmount(bill, service){
    if (service == "Good"){
        total = tipG + bill
        return "Your total is " + "$" + total + "."
    } else if (service == "Fair"){
        total = tipF + bill
        return "Your total is " + "$" + total + "."
    } else if (service == "Bad"){
        total = tipB + bill
        return "Your total is " + "$" + total + "."
    }
    return service
}
console.log(tipAmount(55, "Bad") + finalAmount(55, "Bad"))



/*
PRINT NUMBERS
    1. Create a loop that ends at 10
    2. Best to use FOR loops
*/
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

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