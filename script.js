

document.addEventListener("DOMContentLoaded", () => {


    fetchPokemon()
    let form = document.querySelector(".add-favorite-pokemon")
    form.addEventListener("submit", handleForm)

})


function handleForm(event) {
    event.preventDefault()
    const pokemonNameInput = event.target[0].value
    const pokemonURLInput = event.target[1].value

    let pokemonObj = {
        name: pokemonNameInput,
        image: pokemonURLInput,
    }

    const configurePokemonObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },

        body: JSON.stringify(pokemonObj)

    }
    fetch("http://localhost:3000/pokemon", configurePokemonObj)
        .then(response => response.json())
        .then(obj => renderPokemon(obj))
}

function fetchPokemon() {
    fetch("http://localhost:3000/pokemon")
        .then(response => response.json())
        .then(data => data.forEach(pokemon => renderPokemon(pokemon)))
}

function renderPokemon(pokemon) {
    console.log(pokemon)
    let pokemonCollection = document.getElementById("pokemon-collection")
    let h2 = document.createElement("h2")
    let img = document.createElement("img")
    img.src = pokemon.image
    h2.innerText = pokemon.name
    let button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", () => {
        button.parentNode.remove(button.parentNode)

    })
    // h2.append(button)
    let favoriteDiv = document.createElement("div")
    favoriteDiv.append(button, h2, img)
    pokemonCollection.append(favoriteDiv)

}

