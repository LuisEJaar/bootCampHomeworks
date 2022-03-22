function nameDisplay () {
    let firstName = prompt("Hey whats your first name?")
    let lastName = prompt("Hey whats your last name?")
    alert(`Hello ${firstName} ${lastName}`)
}

nameDisplay() 

//prediction
// a = 2
// b = 10
// c = 102
// d = 30
// e = 40 
// f = 10
// g = 2.5 (10)

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

//vat calc

function vattyMan () {
    let userPrice = prompt("How much for that there mare?") 
    alert(Number(userPrice) + Number(userPrice) * .206)
}

vattyMan()

// cel to F

function degCToDegF () {
    let userTemp = prompt("Ello ole chap, whats the temperature?")
    let fTemp = Number(userTemp)*(9/5) + 32
    alert(fTemp)
}

degCToDegF ()

//swaparoo 

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let a = number1
let b = number2

number1 = b
number2 = a

console.log(number1); // Should show 3
console.log(number2); // Should show 5

// Add the necessary code to swap the values of variables number1 and number2.