//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["avatar", "show1", "show2"]

shows.forEach(index => console.log(index))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numbers = [1,2,3,4,5,6]
let evenNumbers = numbers.filter(number => number % 2 == 0)
console.log(evenNumbers)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function taker(array) {
    array.sort()
    let length = array.length
    let answer = array[1] + array[length - 1]
    alert(answer)
}