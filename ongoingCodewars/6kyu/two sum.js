function twoSum(numbers, target) {
    let answer = []
    numbers.map((number,index,array)=> {
      for(i = index + 1; i < array.length; i++){
        if(number + array[i] === target){
          answer = [index, i]
          break
        }
      }
    })
    return answer
  }