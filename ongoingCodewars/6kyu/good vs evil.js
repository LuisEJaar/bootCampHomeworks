function goodVsEvil(good, evil){
    let gArry = [1,2,3,3,4,10]
    let eArry = [1,2,2,2,3,5,10]
    
    let fOfGood = good.split(" ").map( (element, index) => Number(element) * gArry[index]).reduce((a,b) => a + b)
    let fOfEvil = evil.split(" ").map( (element, index) => Number(element) * eArry[index]).reduce((a,b) => a + b)
    
    return (fOfGood > fOfEvil) ? 'Battle Result: Good triumphs over Evil' : (fOfGood == fOfEvil) ? 'Battle Result: No victor on this battle field' : 'Battle Result: Evil eradicates all trace of Good'
  }