const values = [3, 11, 7, 2, 9, 10]

function sumBot (array) {
    let total = 0
    values.forEach(number => total += number)
    console.log(total)
} 

sumBot(values)