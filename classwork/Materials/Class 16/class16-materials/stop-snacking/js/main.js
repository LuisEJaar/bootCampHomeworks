//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click',snackysnack)

function snackysnack () {
    const snackCount = document.querySelector('input').value
    document.querySelector('#stops').innerHTML = ""
    for (i=1; i<= snackCount; i++) {
        document.querySelector('#stops').innerHTML += "STOP!! "
    }
}