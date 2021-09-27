const myButton = document.getElementById("first")
myButton.addEventListener('click', function(){
    console.log("Button Pressed")
})

const myB = document.getElementById("second")
myB.addEventListener("click", function(event){
    event.target.myB = alert("You left clicked.")
})

window.addEventListener('scroll', () => {
    console.log("You change the size fo the screen.")
})
let timeout;
const delay = 100
window.addEventListener('resize', () => {
    timeout = setTimeout(() => {
        console.log('You change the size of the window')
    }, delay)
})