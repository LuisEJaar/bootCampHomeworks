let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let newArray = arr.filter(index => {
        if (index >= a && index <= b){ 
            return index
        }
    })
    return newArray
}