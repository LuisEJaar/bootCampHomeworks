//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixCreator {
    constructor (showName, showLength, showGenre, rating, completion) {
        this.showName = showName,
        this.showLength = showLength, 
        this.showGenre = showGenre,
        this.completion = completion, 
        this.rating = rating, 
        this.timeStart = 0,
        this.timeStop = 0
    }

    watch () {
        this.timeStart = Date.now()
        console.log("watching")
    }

    stop () {
        this.timeStop = Date.now()
        this.completion += (this.timeStop - this.timeStart) / this.showLength 
        console.log(`You have watched ${this.completion}%`)
    }

    rate () {
        this.rate = prompt("How many stars?")
        alert(`You think this show deserves ${this.rate} stars`)
    }
}


let newShow = new NetflixCreator("The Lu Show", 100,"Comedy", 2, 12)

console.log(newShow)