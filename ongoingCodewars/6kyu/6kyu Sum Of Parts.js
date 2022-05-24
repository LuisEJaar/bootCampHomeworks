function partsSums(ls) {
    if(ls.length == 0) {
      return [0]
    }
    let answer = [ls.reduce((a,b)=>a+b)]
    for(i = 0; i<= ls.length-1; i++) {
      (i != 0) ? answer.push(answer[i]-ls[i]) :  answer.push(answer[0]-ls[i]) 
    }
    return answer
  }