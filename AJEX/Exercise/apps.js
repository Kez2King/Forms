fetch(`https://anapioficeandfire.com/api/characters/583`)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data.aliases)
})
