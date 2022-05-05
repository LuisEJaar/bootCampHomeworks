function timeMath(time1, op, time2) {
  
    function convert2Seconds (time) {
      let secTime = 0
      for(i=0; i <=2; i++) {
        secTime += Number(time[i]) * (60**(2-i))
      }
      return secTime
    }
     
    let t1Secs = convert2Seconds(time1.split(":"))
    let t2Secs = convert2Seconds(time2.split(":"))
    
    let finalTime = (op === "+") ? t1Secs + t2Secs : t1Secs - t2Secs
    
    function convertBack (time) {
      let timeArray = []
      for(i=0; i <=2; i++) {
        timeArray.push((Math.floor(time / (60**(2-i)))))
        time = time - timeArray[i] * (60**(2-i)) 
      }
      
      while (timeArray[0] > 24) {
        timeArray[0] -= 24
      }
      
      while (timeArray[0] < 0) {
        timeArray[0] += 24
      }
      
      if (timeArray[0] === 24) {
        timeArray[0] = 00
      }
      return timeArray
    }
    
    let formatted = convertBack(finalTime).map( (index) => {
      return (index.length === 2) ? index : index.toString().padStart(2, "0")
    })
    
    return formatted.join(":")
  }