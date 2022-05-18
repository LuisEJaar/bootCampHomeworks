function order(words){
    let newArray = []
    for(let word of words.split(" ")) {
      let index = Number(word.match(/\d+/g))
      newArray[index] = word
    }
    return newArray.join(" ").trim()
  }