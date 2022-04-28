function squareOrSquareRoot(array) {
    let newArray = array.map((x) => {
      let square = Math.sqrt(x)
      if ( square === Math.ceil(square)){
        return square
      } else {
        return x * x
      }
    }) 
    return newArray;  
  }