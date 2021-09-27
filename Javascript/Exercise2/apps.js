const title = document.getElementById("heading")
title.innerHTML = "Toppings"

const burger = document.getElementById("burger")
burger.className = "blue list-item"

const newItem = document.createElement("li")
newItem.id = "Pizza"
newItem.className = "purple list-item"
newItem.innerHTML = "Pizza"

const addItem = document.getElementById("list")
addItem.append(newItem)