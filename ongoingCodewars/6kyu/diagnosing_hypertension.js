let hypertensive = function(patients) {
    // the codification of a function
    let totalArray = []
    for (let patient of patients) {
      let currentP = patients.indexOf(patient)
      
      let systolic = patient.map((x) => x.slice(0,x.indexOf("/")))
      let sysAvg = systolic.reduce((a,b) => Number(a) + Number(b))/patient.length
      
      let diastolic = patient.map((x) => x.slice(x.indexOf("/") + 1))
      let diAvg = diastolic.reduce((a,b) => Number(a) + Number(b))/patient.length
      
      if (((sysAvg >= 140 || diAvg >= 90) && patient.length > 1) || (sysAvg >= 180 && diAvg >= 110)) {
        totalArray.push(currentP)
      } else {
        for (i = 0; i < patient.length; i++) {
          if(systolic[i] >= 180 && diastolic[i] >= 110) {
            totalArray.push(currentP)
            break
          }
        }
      } 
    }
    
    return totalArray.length
  }