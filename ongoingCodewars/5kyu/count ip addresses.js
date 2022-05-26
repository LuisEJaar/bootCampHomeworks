function ipsBetween(start, end){
    let startArr = start.split(".")
    let endArr = end.split(".")
    let diffArr = []
    let translation = {
      0: 16777216, 
      1: 65536,
      2: 256,
      3: 1
    }
    
    for(i = 0; i < startArr.length; i++) {
      diffArr.push(endArr[i] - startArr[i])  
    }
    
   return diffArr.map((entry, index) => entry * translation[index]).reduce((a,b)=> a+b)
  }