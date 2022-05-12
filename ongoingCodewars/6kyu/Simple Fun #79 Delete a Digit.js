function deleteDigit(n) {
    let ansArray = n.toString().split("").map( (num, ind, arr) =>  {
      let temp = [...arr]
      temp.splice(ind, 1)
      return Number(temp.join(""))
    })
    return Math.max(...ansArray)
  }