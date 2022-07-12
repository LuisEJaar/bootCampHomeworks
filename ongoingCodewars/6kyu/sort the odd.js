function sortArray(array) {
    let odds = array.filter((x)=> x % 2 !== 0).sort((a,b)=> b-a)
    return array.map((item)=> (item % 2 == 0) ? item : odds.pop())
  }