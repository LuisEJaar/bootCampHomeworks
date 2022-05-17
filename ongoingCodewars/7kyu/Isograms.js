function isIsogram(str){
    let tracking = []
    let strArray = str.split("").map( (letter)=> {
      if (tracking.indexOf(letter.toLowerCase()) === -1) {
        tracking.push(letter.toLowerCase())
      } else {
        return false
      }
    })
    return (strArray.indexOf(false) === -1)
  }