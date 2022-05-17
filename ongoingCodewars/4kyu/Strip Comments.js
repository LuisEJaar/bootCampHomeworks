function solution(input, markers) {
    return input.split("\n").map( (line) => {
      for(let marker of markers) {
        if(line.includes(marker)) {
          return line.substring(0,line.indexOf(marker)).trim()
        } 
      } 
      return line
    }).join("\n")
  }