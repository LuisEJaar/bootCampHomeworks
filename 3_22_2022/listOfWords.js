function listOfWords () {
    let list = []
    do {
        answer = prompt("Oi give me a word")
        if (answer.toLowerCase() != "stop") {
            list.push(answer)
        }
    } while (answer.toLowerCase() != "stop")
    
    console.log(list) 
}

listOfWords()