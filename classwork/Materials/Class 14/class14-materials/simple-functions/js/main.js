document.querySelector('.add').addEventListener('click',sumCall)
document.querySelector('.multiply').addEventListener('click',multiplyCall)
document.querySelector('.divide').addEventListener('click',divideCall)

//create a function that adds two numbers and alerts the sum
function sumCall () {
    const num1 = Number(document.querySelector('#num1').value)
    const num2 = Number(document.querySelector('#num2').value)
    sum(num1,num2)
}

function sum(a,b) {
    alert(a + b)
}

//create a function that multiplys three numbers and console logs the product
function multiplyCall () {
    const num1 = Number(document.querySelector('#num1').value)
    const num2 = Number(document.querySelector('#num2').value)
    const num3 = Number(document.querySelector('#num3').value)
    multiply(num1,num2,num3)
}

function multiply(a,b,c) {
    alert(a * b * c)
}
//create a function that divides two numbers and returns the ???
function divideCall () {
    const num1 = Number(document.querySelector('#num1').value)
    const num2 = Number(document.querySelector('#num2').value)
    divide(num1,num2)
}

function divide(a,b) {
    alert(a / b)
}
