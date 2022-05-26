function disemvowel(str) {
    return str.split("").filter((letter)=> {
      if (!letter.toLowerCase().match(/[aeiou]/)) {
        return letter
      }
    }).join("");
  }