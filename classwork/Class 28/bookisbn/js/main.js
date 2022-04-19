//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem("Titles")

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if (localStorage.getItem("Titles:")) {
          let books = localStorage.getItem("Titles:") + " ; " + data.title
          localStorage.setItem("Titles:", `${books}`)
        } else {
          let books = data.title
          localStorage.setItem("Titles:", `${books}`)
        }
        console.log(localStorage.getItem("Titles:"))
        document.querySelector('h2').innerText = localStorage.getItem("Titles:")
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

