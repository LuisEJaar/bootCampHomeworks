//Display prompt with drop down item list
//When you hit confirm it adds it to the list
//Then you can hit generate
//List is generated with the desired items and their stats

fetch(`https://www.dnd5eapi.co/api/equipment/`)
    .then(res => res.json())
    .then(data => {
        data.results.forEach( item => {
        let list = document.querySelector('select')
        let option = document.createElement('option')
        option.innerText = item.index
        option.value = item.index
        list.appendChild(option)
    })
})

document.querySelector('button').addEventListener("click", genList)

function genList () {
    let choice = document.querySelector('select').value

    fetch(`https://www.dnd5eapi.co/api/equipment/${choice}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let list = document.querySelector('ul')
        let option = document.createElement('li')
        option.innerText = data.index
        
        list.appendChild(option)
    })
}
