function SeriesSum(n) {
    let answer = 0.00
    for(i = 0; i < n; i++) {
      answer += 1 / (1 + 3*i)
    }
    return answer.toFixed(2)
  }