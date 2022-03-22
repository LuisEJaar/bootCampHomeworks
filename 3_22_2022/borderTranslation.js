function camelize(str) {
    let newStr = str.split("-")
    const answer = newStr.map(index => {
        index.toLowerCase()
        if(newStr.indexOf(index) != 0) {
           return index.charAt(0).toUpperCase() + index.slice(1)
        } else {
            return index
        }
    })
    console.log (answer.join(""))
}

camelize("background-color")