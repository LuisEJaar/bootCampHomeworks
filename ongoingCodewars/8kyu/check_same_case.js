function sameCase(a, b){
  
    if (typeof a != 'string' || typeof b != 'string' || 
        a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) {
      return -1
    } 
    
    let aCase = (a.toUpperCase() === a) ?  1 : 0
    let bCase = (b.toUpperCase() === b) ?  1 : 0
    
    return (aCase === bCase) ? 1 : 0
  }