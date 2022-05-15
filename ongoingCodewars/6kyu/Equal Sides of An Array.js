function findEvenIndex(arr) {
  for(i = 0; i < arr.length; i++) {
    //test for edge cases with one value or the pivot is at the end
    if (arr.length === 1 || 0 === arr.slice(0,arr.length-1).reduce((a,b) => a + b)) {
      return arr.length - 1
    }
    
    //compare lh to rh of pivot
    let tempL = (i == 0) ? 0 : arr.slice(0,i).reduce((a,b) => a + b)
    let tempR = (i == arr.length - 1) ? 1: arr.slice(i+1,arr.length).reduce((a,b) => a + b)
    if(tempL == tempR) {
      return i
    }
  }
  return -1
}