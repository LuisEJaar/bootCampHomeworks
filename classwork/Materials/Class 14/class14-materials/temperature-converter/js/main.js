//Write your pseduo code first! 
const input = document.getElementById('tempIn')
const postValue = document.getElementById('postValue')
document.querySelector('.enter').addEventListener('click', convert)

//receive temperature

//listen for button click

//run function
function convert () {
    postValue.innerHTML = `Hmmm let me think.....`
    setTimeout(function() {
        let newValue = (input.value * 9/5) + 32
        postValue.innerHTML = `Temperature in F = ${newValue}`
        },4000);

    
}
//return temperature
