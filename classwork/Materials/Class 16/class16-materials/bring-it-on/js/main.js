// *Variables*
// Create a variable and console log the value

let banana = 10
console.log(banana)

// Create a variable, add 10 to it, and alert the value
let number = 10
alert(number + 10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractor (num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}

// Create a function that divides one number by another and returns the remainder

function modulus (num1, num2) {
    return (num1 % num2)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function summationEvaluator (num1, num2) {
    let answer = num1 + num2
    answer > 50 ? alert(jumanji) : ""
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyer (num1, num2, num3) {
    product = num1 * num2 * num3
    if (product % 3 === 0){
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function looper (num1, string) {
    for (i=1; i <= num1; i++) {
        console.log(string)
    }
}