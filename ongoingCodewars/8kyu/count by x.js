function countBy(x, n) {
    return Array.from(Array(n).keys()).map((element, index) => (index === 0) ? x : x * (index + 1))
  }