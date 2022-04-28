function valueOfX(eq) {
  
    let eqArray = eq.split("=")
    let rArray = eqArray[1].trim().split(" ")
    let lArray = eqArray[0].trim().split(" ")
    
    if (rArray.indexOf("x") != -1){
      console.log("On the Right")
      for(i = 0; i <= rArray.length; i++) {
        console.log(`${lArray.join("")}=${rArray.join("")}`)
        if (i === 0 && Number.isInteger(Number(rArray[i]))) {
          lArray.push("-")
          lArray.push(rArray[i])
          rArray.splice(0,1)
          i = -1
        } else if (Number.isInteger(Number(rArray[i]))) {
          if(rArray[i-1] === "+") {
            lArray.push("-")
          } else {
            lArray.push("+")
          }
          lArray.push(rArray[i])
          rArray.splice(i-1, 2)
          i = -1
        } else if (rArray.length === 1) {
          return eval(lArray.join(""))
        } else if (rArray.length === 2) {
          if (rArray[0] === "-") {
            return eval(lArray.join("")) * -1
          } else {
            return eval(lArray.join(""))
          }
        }
      } 
    } else {
      for(i = 0; i <= lArray.length; i++) {
        if (i === 0 && Number.isInteger(Number(lArray[i]))) {
          rArray.push("-")
          rArray.push(lArray[i])
          lArray.splice(0,1)
          i = -1
        } else if (Number.isInteger(Number(lArray[i]))) {
          if(lArray[i-1] === "+") {
            rArray.push("-")
          } else {
            rArray.push("+")
          }
          rArray.push(lArray[i])
          lArray.splice(i-1,2)
          i = -1
        } else if (lArray.length === 1) {
          return eval(rArray.join(""))
        } else if (lArray.length === 2) {
          if(lArray[0] === "-") {
            return eval(rArray.join("")) * -1
          } else {
            return eval(rArray.join(""))
          }
        }
      }
    }
    
  