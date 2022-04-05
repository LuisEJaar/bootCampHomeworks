function findMultiples(integer, limit) {
  //your code here
  let answer = []
  for (i = 1; i * integer <= limit; i++) {
    answer.push(i * integer)
  }
  return answer
}