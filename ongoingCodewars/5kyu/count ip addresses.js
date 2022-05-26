function ipsBetween(start, end){
    let startArr = start.split(".")
    let endArr = end.split(".")
    let diffArr = []
    
    for(i = 0; i < startArr.length; i++) {
      diffArr.push(endArr[i] - startArr[i])  
    }
    
   return diffArr.reverse().map((entry, index) => entry * 256 ** index).reduce((a,b)=> a+b)
  }