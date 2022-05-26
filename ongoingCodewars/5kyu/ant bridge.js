var antBridge = function(ants, terrain) {
    let tRain = terrain.split("")
    let uncles = ants.split("")
    
    for (i = 0; i <= terrain.length; i++) {
      if ((tRain[i] === ".")||(tRain[i] == "-" && tRain[i+1] == ".")||(tRain[i] == "-" && tRain[i-1] == ".") )  {
        let ant = uncles.pop()
        uncles.unshift(ant)
      } 
    }
    return uncles.join("")
  }