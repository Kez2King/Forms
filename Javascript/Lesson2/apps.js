/*
    Learning Objects
[] Understand and use variables
[] Create, modify, and delete array items
[] Create, modify, and delete Object items
[] Create functions
[] Know and understand the JS code
*/



// 3 ways to make variables

// Global Scope ---> Available Everywhere
// var firstName = "King"
// Block Scope
// let middleName = "Thomas"
// Constant Variable--> Cannot be changed
// const lastName = "Joe"
// Error
// lastName = "Bill"
// console.log(firstName, middleName, lastName)

// const user = {
//     firstName: "Paul",
//     Age: 33
// }; 
// console.log(user)

// user["Age"] = 34
// console.log(user)

// const numbers = [1, 2, 3, 4]
// console.log(numbers)

// numbers.push(5)
// console.log(numbers)

const button = document.querySelector('button')

// Notification in console
button.addEventListener('click', alert => {
    console.log('clicked')
})

// Notification on web page
// button.onclick = function clickOnce() {
//     alert('clicked')
// }

// Create a function
// function sayCheese(name) {
//     console.log("Hello", name)
//     console.log("Hello", name)
// }
// sayCheese()

/*function add (x, y){
    // Returns the value of a function
    return x + y
    // Returns anything to the right of it
    // Ends code block after Return
}*/

// const sum = add(5,7)
// console.log(sum)

/* Create a function
    -3 arguments
    - Pass a string of OMG
    - Saved in a variable that can't change
*/

// function shocker (x,y,z){
//     const total = x + y + z
//     return "OMG"
// }
// const reply = shocker(1,2,3)
// console.log(reply)