var runLengthEncoding = function(str){
    let strArray = str.split("")
    if(strArray.length === 0) {
      return []
    }
    
    let accumulation = [[0, str.split("")[0]]]
    let accumIndex = 0
    
    str.split("").map((letter) => {
      if(accumulation[accumIndex][1] === letter) {
        accumulation[accumIndex][0]++
      } else {
        accumulation.push([1,letter])
        accumIndex++
      }
    })
    
    return accumulation
  }