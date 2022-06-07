function queueTime(customers, n) {
    let till = []
    let counter = 0
    let tilltopia = false
    
    for (customer = 0; customer <= customers.length; customer++) {
      //fill the initial till(s)
      let current = false
      if(till.length < n){
        till.push(customers[customer])
        current = true
        if (till.length == customers.length) {
          n = till.length
          //tilltopia means there are more tills than customers
          tilltopia = true
        }
      } 
  
      //if the tills are full then proceed
      if(till.length == n) {
        //normal tillage, none are empty
        while(till.indexOf(0) == -1 && customer != customers.length) {
          till = till.map((customerTime) => customerTime - 1)
          counter++
        }
        //a till has emptied, we insert current customer if we can
        if(current == false && till.indexOf(0) != -1 && tilltopia == false && customer != customers.length){
          till[till.indexOf(0)] = customers[customer]
          current == true
        }
        //there are no more customers, end game tillage until done
        if(customer == customers.length && till.reduce((a,b) => a+b) > 0) {
          while(till.reduce((a,b) => a+b) > 0) {
            till = till.map((customerTime) => (customerTime > 0) ? customerTime - 1 : 0 )
            counter++
          }
        }
      }
    }
    return counter
  }