var number = function(busStops){
    let count = 0
    for(let stops of busStops) {
      count += stops.reduce( (a,b) => a-b)
    }
    return count
  }