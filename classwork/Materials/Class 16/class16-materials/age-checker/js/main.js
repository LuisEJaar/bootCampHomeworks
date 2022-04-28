//Create a conditonal that checks their age
document.querySelector('.check').addEventListener('click',ageFunction)
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too



function ageFunction () {
    const ageInput = document.getElementById("danceDanceRevolution").value
    const response = document.querySelector(".response")

    console.log(ageInput)
    if (ageInput.value < 16) {
        response.innerText = `You're ${ageInput} years old, you cannot drive`
    } else if (ageInput > 18) {
        response.innerText = `You're ${ageInput} years old, you cannot hate from outside the club, because you cannot even get in`
    } else if (ageInput > 21) {
        response.innerText = `You're ${ageInput} years old, you cannot drink`
    } else if (ageInput > 25) {
        response.innerText = `You're ${ageInput} years old, you cannot rent cars affordably`
    } else if (ageInput > 30) {
        response.innerText = `You're ${ageInput} years old, you can not rent fancy cars affordably`
    } else {
        response.innerText = `You're ${ageInput} years old, there is nothing left to look forward too`
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
