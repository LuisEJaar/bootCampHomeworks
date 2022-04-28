//Write your pseduo code first! 

//assign listener for button point to function

//define a function
    //define a variable for the number provided
    //perform actions on that number
    //output the changed number


const displaySpace = document.getElementById('displaySpace')
document.getElementById('convertButton').addEventListener('click',convertF)

function convertF (celcius) {
    const inputValue = document.getElementById('tempInC')
    displaySpace.innerHTML = (inputValue.value * 9/5) + 32
}