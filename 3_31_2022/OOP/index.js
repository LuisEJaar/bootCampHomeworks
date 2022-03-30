// //Object Literal

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw')
//     }
// }

// circle.draw()

// //Factories

// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('draw')
//         }
//     }
// }

// const circle2 = createCircle(1)

// //Constructor

// function CircleC (radius) {
//     console.log("this", this)
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw')
//     }
// }

// const circle1 = new CircleC(1)

//this. + new is a constructor

//Constructor property circle1.constructor 
// tells what fxn made circle1

// StopWatch

// methods required: start / stop / duration / reset

function StopWatchMaker () {
    let status = ""
    let startTime = 0
    let endTime = 0
    let elapsed = 0

    this.start = function () {
        if (status === "started") {
            console.log("already started son")
        } else if (startTime === 0 || status === "stopped") {
            startTime = Date.now()
            status = "started"
            console.log(status)
        }
    }, 
    this.stop = function () {
        if (status != "started") {
            console.log("Need to start tho")
        } else {
            status = "stopped"
            endTime = Date.now()
        }
    }, 
    this.duration = function() {
        if (startTime && endTime) {
            elapsed = elapsed + endTime - startTime 
            console.log((elapsed)/1000)
        }
    }, 
    this.reset = function () {
        status = ""
        startTime = 0
        endTime = 0
        elapsed = 0
    }
}

let sw = new StopWatchMaker()
