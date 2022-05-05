function lastManStanding(n){
    let array = []
    
    for (i = 1; i <= n; i++) {
      array.push(i)
    }
    
    while (array.length > 1) {
      array = array.filter( (a,index) => (index+1) % 2 === 0 ).reverse()
    }
    
    return array[0]
  }