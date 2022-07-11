String.prototype.toAlternatingCase = function () {
    return this.split("").map((letter)=> {
      return (letter === letter.toUpperCase()) ? letter.toLowerCase() : letter.toUpperCase()
    }).join("") 
  }