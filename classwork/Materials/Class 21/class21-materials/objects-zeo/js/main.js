//Create a stopwatch object that has four properties and three methods

let stopWatch = {
    color: "red",
    age: "old",
    brand: "Nordstrom",
    works: true
}

stopWatch.getBrand = function(brand) {
    console.log(`The brand is ${brand}`)
}

stopWatch.tellTime = function () {
    console.log(`It's time for you to get your own watch`)
}

stopWatch.bluntWeapon = function () {
    this.works = false
}

