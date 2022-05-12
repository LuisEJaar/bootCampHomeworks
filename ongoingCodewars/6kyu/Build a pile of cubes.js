function findNb(m) {
    let tracker = [0,0]
    while (tracker[1] != m) {
      tracker[0]++
      tracker[1] += tracker[0]**3
      if (tracker[1] > m) {
        return -1
        
      }
    }
    return (tracker[0]);
}