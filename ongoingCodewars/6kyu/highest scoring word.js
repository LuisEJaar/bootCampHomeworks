function high(x){
    let scoreSheet = "abcdefghijklmnopqrstuvwxyz"
    
    let wordArray = x.split(" ")
    
    let valueArray = []
    
    for (let word of wordArray) {
      let letters = word.split("")
      let temp = 0
      for(let each of letters){
        temp += scoreSheet.indexOf(each) + 1
      }
      valueArray.push(Number(temp))
    }
    return wordArray[valueArray.indexOf(Math.max(...valueArray))]
  }