//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(color, year, tankFill, warranty) {
        this.color = color;
        this.year = year;
        this.tankFull = tankFill;
        this.warranty = warranty;
        this.oldPodStatus = false;
        this.newPodStatus = false;
    }

    brew () {
        let status = this.check()
        if(status === true || this.tankFill < 25) {
            console.log("Cannot Brew")
        } else {
            console.log("Brewing")
            this.oldPodStatus = true
            this.tankFull -= 25;
            setTimeout( () => {console.log("Your Coffee is ready")}, 3000)
        }
    }

    tankFullness () {
        console.log(`The tank is ${this.tankFill}% full`)
    }

    load() {
        this.newPodStatus = true
    }

    empty() {
        this.oldPodStatus = false
    }

    fill () {
        this.tankFill = 100
    }

    check () {
        if (this.oldPodStatus === true) {
            console.log("There is a pod present")
            return true
        } else {
            return false
        } 
        
    }
}

let myEspresso = new EspressoMachine("black", 2017, 0, "None")
