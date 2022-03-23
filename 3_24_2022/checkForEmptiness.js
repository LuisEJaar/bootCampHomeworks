let myObject = {
    // key: "value"
  }
  
  function isEmpty (obj) {
      let counter = 0
      for(let prop in obj){
          counter++
      }
      console.log(counter)
      return (counter == 0) ? true : false
  }
  
  console.log(isEmpty(myObject))