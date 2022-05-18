const binaryArrayToNumber = arr => {
    let answer = 0
    arr.forEach((element,index,array) => {
      answer+= element*(2**(array.length - (1 + index))) 
      })
    return answer
    }