//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector("input").value

  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=MfreXFmlXezONi4r73U8BD74UxICbf42zdPODbfF&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let image = document.querySelector("img")
        let video = document.querySelector("iframe")
        
        if (data.media_type === "image") {
          image.style.display = "block"
          image.src = data.hdurl
          video.style.display = "none"
        } else if (data.media_type === "video") {
          video.style.display = "block"
          video.src = data.url
          image.style.display = "none"
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

