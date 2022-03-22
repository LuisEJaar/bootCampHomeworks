// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

function carousel () {
    let iterations = Number(prompt("Alright, how many spins do you want?"))
    for (i=1; i<= iterations; i++){
        alert(`Yay we've gone around ${i} times`)
    }
}

carousel ()

function carousel2 () {
    let iterations = Number(prompt("Alright, how many spins do you want?"))
    let i = 1
    while (i<= iterations){
        alert(`Yay we've gone around ${i} times`)
        i++
    }
}

carousel2 ()

/****************************************************************************************** */
// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }

// This program uses the modulo operator %, which calculates the remainder after division of one number by another. 
// It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!


let startNumber = Number(prompt("Where to begin?"))

for (let i = startNumber; i < startNumber + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

i = startNumber

while (i < startNumber + 10) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
        } else {
        console.log(`${i} is odd`);
        }
    i++
}

/****************************************************************************************** */
// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

function numberAsker () {
    let userInput = 4
    while (userInput > 100 || userInput < 50) {
        userInput = Number(prompt("hey give me a number between 50 or 100"))
    }
}

numberAsker ()

/****************************************************************************************** */
// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

function multiplication () {
    let input = Number(prompt("Give me a number"))
    if (input >= 2 && input <= 9){
        let multItems = []
        for (i=0; i <= 10; i++) {
            multItems[i] = `${i} x ${input} = ${i*input}`
        }
        console.table(multItems)
    }
}

multiplication ()

/****************************************************************************************** */
// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the
// programs asks the user to enter text until either 
// "yes" or "no" is typed, which ends the game.

function neitherYorN () {
    let answer = prompt("Type in either yes or no, I'm serious")
    answer.toLowerCase()
    while(answer != "yes" && answer != "no"){
        answer = prompt("What did I tell you? Type yes or no")
    }
}
neitherYorN ()

/****************************************************************************************** */
// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
// This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!

function fizzBuzz () {
    for (i=1; i<= 100; i++){
        if (i % 3 != 0 && i % 5 != 0) {
            console.log(i)
        } else if (i % 3 === 0) {
            if (i % 5 === 0){
                console.log("FizzBuzz")
            } else {
                console.log("Fizz")
            }
        } else if (i % 5 === 0){
            console.log("Buzz")
        }
    }
}

fizzBuzz ()