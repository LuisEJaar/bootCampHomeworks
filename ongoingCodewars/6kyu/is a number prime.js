function isPrime(num) {
    for(i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return (num === 0 || num === 1 || num < 0 ) ? false : true
  }