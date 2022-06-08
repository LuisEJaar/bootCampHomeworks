function squareSum(numbers){
    return (numbers.length > 0) ? numbers.map((x) => x**2).reduce((a,b) => a+b) : 0 
  }