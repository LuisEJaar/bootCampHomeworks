let arr = [5, 2, 1, -10, 8]

function arraySorterReverse (arr) {
    arr = arr.sort((a, b) => a - b).reverse()
}

arraySorterReverse (arr)