fetch("https://www.cheapshark.com/api/1.0/deals?id=X8sebHhbc1Ga0dTkgg59WgyM506af9oNZZJLU9uSrX8%3D")
    .then (res => res.json())
    .then (data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`Error ${err}`)
    } )