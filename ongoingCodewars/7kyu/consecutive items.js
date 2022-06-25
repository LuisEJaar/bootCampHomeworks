function consecutive(arr, a, b) {
    let decision = false
    
    arr.map((number, index, array) => {
      if(number == a) {
        if(array[index + 1] == b) {
          decision = true
        }
      } else if (number == b) {
          if(array[index + 1] == a) {
            decision = true
          }
      }
    })
    return decision
  }