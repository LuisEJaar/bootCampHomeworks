function findChildren(dancingBrigade) {
    return dancingBrigade.toLowerCase().split("").sort().map( (element, index, array) => {
      if (array.indexOf(element.toLowerCase()) === index) {
       return element.toUpperCase()
      } else {
        return element
      }
    }).join("");
  }