let arr = [5, 3, 8, 1]

function filterRangeInPlace(arr, a, b) {
    for(let index of arr) {
        if (index < a || index > b) {
            arr.splice(arr.indexOf(index),1)
        }
    }
}

filterRangeInPlace(arr, 1, 4)
console.log(arr)