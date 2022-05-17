function arrayDiff(a, b) {
    for (let indexB of b) {
      a = a.filter( (indexA) => indexA != indexB)
    }
    return a
  }