function bitMarch (n) {
    let arr = []
    let arrMarch = []
    
    for (i = 1; i <= n; i++) {
      arr.push(1)
    }
    
    for (i = 0; i < 8-n; i++) {
      arr.unshift(0)
    }
    
    arrMarch.push(arr.slice())
    
    while (arr[0] != 1) {
      arr.shift()
      arr.push(0)
      arrMarch.push(arr.slice())
    }
    
    return arrMarch
  }