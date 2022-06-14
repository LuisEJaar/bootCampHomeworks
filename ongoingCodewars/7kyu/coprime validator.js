function primeParts(num) {
    let answer = [num]
    for (i = 1; i <= num/2; i++) {
      if (num % i === 0){
        answer.push(i)
      }
    }
    return answer
  }
  
  function isCoprime(x, y) {
    let xPrimes = primeParts(x)
    let yPrimes = primeParts(y)
    let answer = true
    for(let factor of xPrimes) {
      if(factor != 1 && yPrimes.indexOf(factor) != -1){
        answer = false
      }
    }
    return answer
  }