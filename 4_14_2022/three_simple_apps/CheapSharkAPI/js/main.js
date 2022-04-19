//receive user input as a string
//create the fetch url using that input
//display that game

fetch("https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0")
    .then (res => res.json())
    .then (data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`Error ${err}`)
    } )