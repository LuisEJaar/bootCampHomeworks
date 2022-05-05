function findMaxRange(ranges){
    let rangeArray = []
    for(let index of ranges) {
      //Remove the text
      let textV = (index.replace("from ", "").replace("to ",""))
      //Split remainder into array and convert to a range
      let range = Math.abs(textV.split(" ").reduce((a,b) => Number(a) - Number(b)))
      //Store in an array of ranges
      rangeArray.push(range)
    }
    
    let answer = []
    
    //push the corresponding indexes from the provided array into the answer array
    for(i = 0; i<= rangeArray.length; i++) {
      if (rangeArray[i] === Math.max(...rangeArray)){
        answer.push(ranges[i])
      }
    }
    
    return answer
  }
  