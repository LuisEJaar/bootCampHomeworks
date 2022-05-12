function getSum(a,b) {
  
    let sum = 0
    
    while (a != b) {
      sum += a
      if (a > b) {
        a--
      } else {
        a++  
      }
    } 
    
    return sum + b
  }