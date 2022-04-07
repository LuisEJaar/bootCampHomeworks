function pattern(n){
    var output="1\n";
    for (i = 1; i < n; i++) {
      output += "1"
      
      let stars = 0
      while (stars != i) {
        output += "*"
        stars++
      } 
      
      output += i + 1
  
      if (i < n-1) {output = output + "\n"} 
    }
   return output;
  }