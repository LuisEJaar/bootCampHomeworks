// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  
    const cans = {
      avail: Math.floor(bonus / price),
      height: 0,
      required: 0, 
    }
  
    while (cans.required < cans.avail){
      cans.required += (cans.height + 1)**2
      if (cans.required <= cans.avail) {
        cans.height++
      }
    }
    
    return cans.height
  