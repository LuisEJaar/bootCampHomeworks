function sumArray(array) {
    if(array != null && array.length != 0) {
      array.sort((a,b) => a - b).pop()
      array.shift()
      return (array.length === 0) ? 0 : array.reduce((a,b) => a + b)
    }
    return 0
  }