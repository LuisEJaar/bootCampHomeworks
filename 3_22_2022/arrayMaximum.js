const values = [3, 11, 7, 2, 9, 10];

function arrayMax (array) {
    let answer = array[0]
    array.forEach(index => {
        if (index > answer){
            answer = index
        }
    })
    console.log(answer)
}

arrayMax(values)