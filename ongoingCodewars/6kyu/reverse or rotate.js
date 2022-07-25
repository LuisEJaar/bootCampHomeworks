function revrot(str, sz) {
    if (str.length == 0 || sz == 0 || Math.floor(str.length/sz) == 0) {
      return ""
    }
    
    function revRot(array) {
      if(array.map((x)=> x**3).reduce((a,b) => a+b) % 2 === 0) {
        return array.reverse()
      } else { 
        array.push(array.shift())
        return array
      }
    }
    
    let strArray = []
    let ogArray = str.split("").map((x)=> Number(x))
    
    for(i = 0; i < Math.floor(str.length/sz); i++){
      strArray.push(revRot(ogArray.splice(0,sz)))
    }
    
    return strArray.map((x)=> x.join("")).join("")
  }