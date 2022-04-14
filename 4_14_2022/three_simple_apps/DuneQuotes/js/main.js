//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://the-dune-api.herokuapp.com/quotes'

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data[0].quote)
        document.querySelector('h3').innerText = data[0].quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}