function getCount(str) {
    if (str.length === 0) {return 0}
      
    let vList = {a: 0, e:0, i:0, o:0, u:0}
    let vowelsCount = str.split("").map((index) => (vList[index] != undefined) ? 1 : 0) 
    return vowelsCount.reduce( (a,b)=> a + b);
    
  }