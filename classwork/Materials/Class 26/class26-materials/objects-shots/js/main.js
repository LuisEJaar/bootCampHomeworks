//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click',drank)

function drank () {
    let drink = document.querySelector('input').value
    
    console.log(drink)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        
        let drinkNumber = getRandomInt(data.drinks.length + 1)
        console.log(drink)
        console.log(data.drinks)
        console.log(data.drinks[drinkNumber])
        document.querySelector("h2").innerText = data.drinks[drinkNumber].strDrink
        document.querySelector("img").src = data.drinks[drinkNumber].strDrinkThumb
        document.querySelector("h3").innerText = data.drinks[drinkNumber].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
} 

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
.then(res => res.json())
.then(data => {
  console.log(data)  
})