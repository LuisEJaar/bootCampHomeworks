function gap(g, m, n) {
  
    let answerArray = []
    
    for (i = 0; i <= (n-m); i++) {
      let mCounter = m + i
      let isPrime = true
      
      for(j = 2; j <= Math.sqrt(mCounter); j++) {
        if (mCounter % j === 0) {
          isPrime = false
        } 
      }
      
      if (isPrime === true) {
        answerArray.push(mCounter)
        
        if(answerArray.length === 2){
          if (answerArray[1] - answerArray[0] === g){
            return [answerArray[0], answerArray[1]]
          } else {
            answerArray.splice(0,1)
          }
        }
      }
    }
    
    return null
      
  }