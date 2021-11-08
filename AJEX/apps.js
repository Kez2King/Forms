/**
 * AJAX
 * Asychronous Javascript & XML
 * 
 * Objectives
 *  [X] Make an AJAX request
 *      -XMLHttpRequest
 *      -Fetch
 *  [X] Understand server status codes
 *  [] Handle AJAX responses
 */

// XHR -----> Creates Requests
// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     console.log(this)
// }

// request.open("GET", "https://placekitten.com/400/400")

// const requestButton = document.getElementById("request-button")
// requestButton.addEventListener("click", () => {
//     request.send()
// })


/**
 * Status Codes
 * 
 * - 100s --> Info
 * - 200s --> Success
 * - 300s --> Redirects
 * - 400s --> Client Errors
 * - 500s --> Server Errors
 */

// API ---> Application Programming Interface
// Fetch

// fetch("http://placekitten.com/400/400")
// .then(function(response){
//     response.text()
// })
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })

/**
 * PROMISES 101
 * 
 * [] Function Returns + Method Chaining
 * [] Understand What They Are
 * [] Understand Why We Use Them
 * [] Understand JSON (Javascript Object Notation)
 */

// function whatsYourName (firstName) {
//     return firstName
// }

// const firstNameLength = whatsYourName("King").length
// console.log(firstNameLength)

// function makeGroceryList(item1, item2, item3){
//     return [item1, item2, item3]
// }
// const firstItem = makeGroceryList("bananas", "pears", "apples")[0]

// console.log(firstItem)

fetch(`https://anapioficeandfire.com/api/characters/583`)
.then((response) => {
    // Parse the JSON into actual JS object
    return response.json()
})
.then((data) => console.log(data))


// JSON --> Looks like an object but its a string
// "{
//     characterName: "Jon Snow"
//     age: 20
// }"