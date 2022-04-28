// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let myFavHolliday
myFavHolliday = "CHRISTMAS"

console.log(myFavHolliday)
//Declare a variable, assign it a string, alert the last three 
//characters in the string (Use your google-fu and the MDN)

const myString = "Stringthings"

let answer = ""

for (i = 0; i < 3; i++) {
    let newString = myString.charAt(myString.length - 3 + i)
    answer = answer + newString
}

alert(answer)

//his answer

alert (myString.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractor(num1, num2, num3, num4, num5) {
    let answer = 100 - num1 - num2 - num3 - num4 - num5
    (answer < 0) ? alert(-1 * answer) : alert(answer)
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function highestAndLowest(num1, num2, num3) {
    let array = [num1,num2,num3]
    array.sort((a,b)=> a - b)
    console.log(array[0], array[2])
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function flipper() { 
    return (Math.random() > 0.5) ? "Heads" : "Tails"
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flipping(num) {
    let totalHeads = 0
    let totalTails = 0
    for (i = 1; i <= num; i++) { 
        (flipper() == "Heads") ? totalHeads++ : totalTails++
    }
    console.log(`Heads: ${totalHeads}`, `Tails: ${totalTails}`)
}

flipping(5)