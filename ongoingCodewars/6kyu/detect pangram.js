function isPangram(string){
    let count = {}
    
    string.toLowerCase().split("").map((letter)=> {
      if(letter != " " && /^[a-z]+$/.test(letter)){
        count[letter] = ""
      }
    })
    
    return Object.keys(count).length == 26
  }