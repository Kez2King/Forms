const myButton = document.getElementById("Please")
myButton.style.backgroundColor = "teal"
myButton.style.width = "250px"
myButton.style.height = "100px"

myButton.addEventListener("click", function(){
    console.log("Clicked")
})

/**
 * 1) Listen for event on the document
 * 2) Specifically, click event
 * 3) Run the function I provide when the event I'm targeting
 * 4) The event object is passed in to the function I created automatically
 * 5) Log out the target property on the event
 */

document.addEventListener('click', function(event){
    console.log(event.target)
})
