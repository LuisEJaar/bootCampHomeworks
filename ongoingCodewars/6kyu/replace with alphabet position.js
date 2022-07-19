function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    return text.split("").map((letter)=> {
      if(alphabet.indexOf(letter.toLowerCase()) != -1) {
        return alphabet.indexOf(letter.toLowerCase()) + 1
      }
    }).filter((number)=> Number.isInteger(number)).join(" ");
  }