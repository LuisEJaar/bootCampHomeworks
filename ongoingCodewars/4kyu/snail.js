snail = function(array) {
    if (array.length === 1) {
      return array[0]
    }
    
    let answer = [array[0][0]]
    let totalW = array[0].length
    let totalH = array[1].length
    let currentCol = 0
    let currentRow = 0
    let allowableW = totalW - 1
    let allowableH = totalW - 1
    
    for(i=0; i < totalW*totalH;i++) {
      for(tr = 0; tr < allowableW; tr++) {
        currentCol++
        answer.push(array[currentRow][currentCol])
      } 
      
      if (i != 0) {
        allowableW--  
      }
      
      
      for(td = 0; td < allowableH; td++) {
        currentRow++
        answer.push(array[currentRow][currentCol])
      } 
      allowableH--
      
      for(tl = 0; tl < allowableW; tl++) {
        currentCol--
        answer.push(array[currentRow][currentCol])
      } 
      allowableW--
      
      for(tu = 0; tu < allowableH; tu++) {
        currentRow--
        answer.push(array[currentRow][currentCol])
      } 
      allowableH--
    }
    return answer
  }