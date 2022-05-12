function getHints(answer, guess) {
    let response = {
      black: 0,
      white: 0
    }
    
    for (i = 0; i < answer.length; i++) {
      if (answer[i] === guess[i]) {
        
        if (i === 0) {
          guess.shift()
          answer.shift()
        } else {
          guess.splice(i,1)
          answer.splice(i,1)
        }
        
        response.black++
        
        i = -1
      } 
    }
    
    for (i = 0; i < answer.length; i++) {
      for(j = 0; j < guess.length; j++) {
        if(answer[i] === guess[j]) {
          response.white++
          answer.splice(i,1)
          guess.splice(j,1)
          i = -1
        }
      }
    }
    
    return response
  }