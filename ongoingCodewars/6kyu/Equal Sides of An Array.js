function findEvenIndex(arr) {
    if ((arr.length === 2 && arr[1] === 0) || arr.length === 1) {
        return 0
    }
    if (arr.length === 2 && arr[0] === 0) {
        return 1
    }
    for(i = 1; i < arr.length-1; i++) {
      if (0 == arr.slice(0,arr.length-1).reduce((a,b) => a + b)) {
        return arr.length-1
      }
      if (arr[0] === arr.slice(0).reduce((a,b) => a + b)) {
        return 0
      } 
      let tempL = arr.slice(0,i).reduce((a,b) => a + b)
      let tempR = arr.slice(i+1,arr.length).reduce((a,b) => a + b)
      if(tempL == tempR) {
        let answer = i
        return answer
      }
    }
    return -1