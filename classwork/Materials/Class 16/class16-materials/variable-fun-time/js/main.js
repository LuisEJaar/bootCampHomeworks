//--- Easy
//create a variable and assign it a number
let orange = 11
//minus 10 from that number
orange = orange -10
//print that number to the console
console.log(orange)
//--- Medium

//create a variable that holds a value from the input

let inputValue = document.querySelector('#danceDanceRevolution').value

//add 25 to that number

inputValue += 25

//alert that number
alert(inputValue)

//--- Hard
//create a variable that holds the h1

const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', logger)

function logger () {
    inputValue = inputGrabber()
    console.log(Number(orange) + Number(inputValue))
}

function inputGrabber () {
    let inputValue = document.querySelector('#danceDanceRevolution').value
    return (Number(inputValue) + 25)
}