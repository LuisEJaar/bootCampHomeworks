function diamond(n){
  
    if (n % 2 === 0 || n < 0) {
      return null
    }
    
    let half = false
    let stars = 1
    let diam = ""
    
    for (i = 1; i <= n; i++) {
      let row = "*".repeat(stars)
      
      row = row.padStart((n-stars)/2 + stars, " ")
  
      if (stars === n) {
        half = true
      }   
  
      stars = (half === false) ? stars + 2 : stars - 2
  
      diam += row + "\n"
    }
    
    return diam
  }