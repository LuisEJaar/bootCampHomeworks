//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener("click",drankTimer)

let interval 

function drankTimer () {
    if (!interval) {
        drank()
    }
    interval = setInterval(drank, 4000)
}

function drank () {
    console.log("clicked")

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
    console.log(data.drinks)
    console.log(data.drinks[0])
    document.querySelector("h2").innerText = data.drinks[0].strDrink
    document.querySelector("img").src = data.drinks[0].strDrinkThumb
    document.querySelector("h3").innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
    console.log(`error ${err}`)
    })

} 