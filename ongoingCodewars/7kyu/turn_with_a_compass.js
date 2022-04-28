function direction(facing, turn){
    // your code here
    let dir = {
      E: 0, NE: 45, N: 90, NW: 135, W: 180, SW: 225, S: 270, SE: 315
    }
    
    let fDegree = dir[facing]
    let nDegree = fDegree - turn
    
    while (nDegree >= 360 || nDegree < 0) {
      (nDegree >= 360) ? nDegree -= 360 : nDegree += 360
    }
    
    return Object.keys(dir).find(key => dir[key] === nDegree)
  }