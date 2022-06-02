function race(v1, v2, g) {
    let time = []
    let s = -g/(v1-v2)*60**2

    for(i = 2; i > -1; i--) {
      time.push(Math.floor(s/(60**[i])))
      s = s - (60**[i])*time[time.length-1]
    }
  
    return (time[0] < 0) ? null : time
}