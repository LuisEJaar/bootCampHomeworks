function isPangram(string){
    let count = {}
    
    string.toLowerCase().split("").map((letter)=> {
      if(letter != " " && /^[a-z]+$/.test(letter) && !count[letter]){
        count[letter] = ""
      } else if (count[letter]) {
        return false
      }
    })
    
    return Object.keys(count).length == 26
  }