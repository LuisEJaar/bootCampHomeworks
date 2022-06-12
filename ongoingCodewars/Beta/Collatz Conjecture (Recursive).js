function collatzCount(n) {
  
    if (Array.isArray(n) === false) {
      n = Array.from([n])
      n.push(0)
      n.map((x)=> Number(x))
    } 
    
    if (n[0] != 1) {
      n[0] = (n[0] % 2 == 0) ? n[0] / 2 : n[0] * 3 + 1
      n[1]++
    }
    
    if(n[0] === 1) {
      return n[1]
    } else {
      collatzCount(n)
    }
  }