function maxBall(v0) {
    function getHeight (time, velocity) {
      return (velocity*1000/60/60)*time - 0.5*9.81*time**2
    }
    
    let time = 0.1
    let i = 0
    
    let height = 0
    
    while (getHeight(time, v0) >= height) {
      height = getHeight(time, v0)
      time += 0.1
      i++
    } 
    return i
}