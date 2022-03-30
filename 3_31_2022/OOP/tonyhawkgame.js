function ThpSkater (name, age, boardColor, brokenBones) {
    let score = 0
    
    this.skaterName = name
    this.skaterAge = age
    this.boardColor = boardColor
    this.brokenBones = brokenBones

    this.yee = function () {
        console.log(`${this.skaterName} yells yeeyeeyee`)
    }
    this.doAGainer = function () {
        console.log(`${this.skaterName} did a gainer`)
        score = score + 10
        let odds = Math.random()
        if (odds > .7) {
            this.brokenBones++
            console.log(`${this.skaterName} broke a bone, but can still ride!`)
        }
        
    }
    this.doflip = function () {
        console.log(`${this.skaterName} did a flip`)
        score = score + 10
    }
    this.status = function () {
        console.log(`${this.skaterName} has ${score} points`)
    }
}

let bigBoi = new ThpSkater ("Lui", 30, "black", 2)