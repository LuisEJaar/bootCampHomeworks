function sumOfDifferences(arr) {
    return (arr.length <= 1) ? 0 : arr.sort((a,b)=>b-a).map((element, index, array)=> {
      if(array[index + 1] != undefined) {
        return element - array[index + 1]
      } else {
        return 0
      }
    }).reduce((a,b) => a+b)
  }