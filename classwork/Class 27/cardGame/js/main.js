//build the game war

let deck = ""

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deck = data.deck_id

        console.log(deck)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

//store the deck in local storage for homework

document.querySelector('button').addEventListener('click', draw2)

function draw2(){

  const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        let p1Card = converter(data.cards[0].value)
        let p2Card = converter(data.cards[1].value)

        let winner = document.querySelector('h3')

        if (Number(p1Card) > Number(p2Card)) {
          winner.innerText = "Player1 Wins"
        } else if (Number(p1Card) < Number(p2Card)) {
          winner.innerText = "Player2 Wins"
        } else if (Number(p1Card) === Number(p2Card)) {
          winner.innerText = "This will be the day"
        }

        function converter (input) {
          switch(input) {
            case 'ACE':
              return 14
            case 'KING':
              return 13
            case 'QUEEN':
              return 12
            case 'JOKER':
              return 11
            default:
              return Number(input)
          }

        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

