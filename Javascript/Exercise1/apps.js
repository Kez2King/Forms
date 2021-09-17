// Create a function that give a name and art
// function madlib(name, art){
//     return `${name}'s favorite subject in school is ${art}.`
// }
// Create a variable to print return
// var outCome = madlib("Anushka", "music")
// console.log(outCome)


// Create a funtion that gives a tip and bill amount
// Bill Amount
var bill = 100
function tipAmount(tip){
    start = 1;
    while (start == 1 ){
        if (tip == 20){
            console.log("Good")
        } else if (tip == 15){
            console.log("Fair")
        } else {
            console.log("Bad")
            start += 1;
        }
    // console.log(bill)
    return tip
    }
}
var userTip = tipAmount(15)
var totalPrice = tipAmount(15) + bill
console.log(userTip)
console.log(totalPrice)