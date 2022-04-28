// *Variables*
// Declare a variable, assign it a value, and alert the value
let banana

banana = 6

alert(banana)

// Create a variable, divide it by 10, and console log the value
let orange = 50
orange = orange / 10
console.log(orange)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function threeMultiplyer (num1, num2, num3) {
    alert(num1 * num2 * num3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function fourNumbers (num1, num2, num3, num4) {
    let add = num1 + num2 - num3 - num4
    console.log(add)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function conditionalThing (num1, num2, num3) {
    if ((100 + num1 - num2)/num3 > 25) {
        console.log("WE HAVE A WINNNA")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek (string) {
    let uncapped = string.toLowerCase()
    if (uncapped === "saturday" || uncapped === "sunday") {
        alert("weekend")
    } else if (uncapped === "monday" || uncapped === "tuesday" || uncapped === "wednesday" || uncapped === "thursday" || uncapped === "friday") {

    } else {
        alert("try again")
    }
}
 
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function logger (num1) {
    for (i = 1; i <= num1; i+3) {
        console.log(i)
    }
}
