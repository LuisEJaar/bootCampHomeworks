function accum(s) {
    return s.split("").map( (element, index) => {
      return element.toUpperCase().padEnd(index + 1, `${element.toLowerCase()}`)  
    }).join("-")
  }