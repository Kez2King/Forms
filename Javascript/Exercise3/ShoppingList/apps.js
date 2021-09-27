let input = document.getElementsByTagName("input")[0]
let submitButton = document.getElementsByTagName('button')[0]
let title = document.getElementsByTagName("h1")[0]
let itemList= document.createElement("ul")
let removeButton = null


itemList.setAttribute("id", "items-List")

title.insertAdjacentElement("afterend", itemList)

submitButton.addEventListener("click", (event) => {
    // console.log(input.value)
    let item = document.createElement("li")
    item.innerHTML = input.value

    removeButton = document.createElement("button")
    removeButton.setAttribute("class", "remove_button")
    removeButton.innerHTML = "remove"
    removeButton.addEventListener("click", (event) => {
        event.target.parentElement.remove()
    })
    item.append(removeButton)

    // console.log(item)
    itemList.appendChild(item)

    input.value = ""
})

// console.log(submitButton)