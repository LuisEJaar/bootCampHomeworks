function bouncingBall(h,  bounce,  window) {
    //inapplicable cases
    if (h < 0 || (bounce <= 0 || bounce >= 1) || window >= h ) {
      return -1
    }
    
    //initial pass
    let passes = 1
    //subsequent passes
    while (h > window) {
      h = (bounce * h)
      passes += 2
    }
    
    return (passes > 1) ? passes - 2 : 1
  }