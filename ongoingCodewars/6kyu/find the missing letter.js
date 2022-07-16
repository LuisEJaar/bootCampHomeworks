function findMissingLetter(array) {
    let list = "abcdefghijklmnopqrstuvwxyz".split("")
   
    let num = list.indexOf(array[0].toLowerCase())
    let letterCase = (list[num] === array[0]) ? true : false
    
    for(i = 0; i < array.length; i++) {
      if( array[i].toLowerCase() !== list[i + num]) {
        return (letterCase) ? list[i+num] : list[i+num].toUpperCase()
      }
    }
  }