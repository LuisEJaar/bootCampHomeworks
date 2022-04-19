//beast list creation
function beastList() {
  fetch("https://www.dnd5eapi.co/api/monsters/")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(element => {
      let option = document.createElement('option')
      option.innerText = element.index
      option.value = element.index
      document.querySelector("select").appendChild(option)
    })
  })
}

beastList()

document.querySelector('#fetchBeast').addEventListener('click', fetchBeast)

document.querySelector('#wrathMe').addEventListener('click', randBeast)

function fetchBeast(){
  const choice = document.querySelector('select').value
  const url = `https://www.dnd5eapi.co/api/monsters/${choice}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}

function randBeast(){
  const url = `https://www.dnd5eapi.co/api/monsters/`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let randEncounter = Math.floor(Math.random()*data.count)
    console.log(randEncounter)
    console.log(data.results[randEncounter])
  })
}