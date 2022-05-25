function sumDigNthTerm(initval, patternl, nthterm) { 
    //starting at the end of the last completed loop (excluding final one)
    let starting = Math.floor(nthterm / patternl.length) - 1
    
    //Setting initial value
    let ansArry = [initval + (starting) * patternl.reduce((a,b) => a + b)]
    
    //creating array from last loop to nth value
    for(i = starting * patternl.length; i < nthterm-1; i++) {
      let key = (i) % patternl.length
      ansArry.push(patternl[key] + ansArry[i - (starting * patternl.length)])
    }
    
    return ansArry[ansArry.length -1].toString().split("").reduce((a,b)=> Number(a) + Number(b))
}