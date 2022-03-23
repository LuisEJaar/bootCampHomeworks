let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sumBot(obj) {
    total = 0
    for (let key in obj) {
        total += obj[key]
    }
    return total
}

console.log(sumBot(salaries))