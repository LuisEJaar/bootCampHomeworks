//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('#increase').addEventListener("click",botIncrement)
document.querySelector('#reset').addEventListener("click",botReset)
 
if (localStorage.getItem("botScore")) {
    document.querySelector('h2').innerText = localStorage.getItem("botScore")
}

function botIncrement () { 

    let display = document.querySelector('h2')

    if (Number(localStorage.getItem("botScore")) >= 0) {
        let current = Number(localStorage.getItem("botScore")) + 1    
        localStorage.setItem("botScore",current)
        display.innerText = `${current}`
    } else {
        localStorage.setItem("botScore","0")
        display.innerText = 0
    } 
}

function botReset () {
    let display = document.querySelector('h2')
    localStorage.setItem("botScore","0")
    display.innerText = 0
}
