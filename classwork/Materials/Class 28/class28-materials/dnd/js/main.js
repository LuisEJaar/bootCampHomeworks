//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //find ul list
        let list = document.querySelector('ul')

        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        data.subclasses.forEach(obj => {
        //create li with subclass
        let newEntry = document.createElement('li')
        newEntry.innerText = obj.name
        //append to dom
        list.appendChild(newEntry)
       })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

