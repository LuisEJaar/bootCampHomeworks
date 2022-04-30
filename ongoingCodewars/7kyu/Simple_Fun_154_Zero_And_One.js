function zeroAndOne(s) {
  
    let sNew = s.split("").map(index => Number(index))
    
    for (i = 0; i < sNew.length; i++) {
      if ((sNew[i] === 0 && sNew[i+1] === 1) || (sNew[i] === 1 && sNew[i+1] === 0)) {
        sNew[i] = ""
        sNew[i+1] = ""
        i = 0
      }
    }
    
    return sNew.join("").length
  }