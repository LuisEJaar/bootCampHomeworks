// let pizza = {
//     style: "Deep Dish",
//     size: "12 inch",
//     toppings: ["pepperoni", "mushrooms"],
//     tempF: 135, 
//     sliceCount: 6,

//     removeSlice: function () {
//         this.sliceCount--
//     },

//     stayedOut: function () {
//         let timer = prompt("How long did you leave it out in minutes?")
//         this.tempF -= timer
//     }, 

//     addFridgeToppings: function () {
//         let doneYet = prompt("You wanna add anything else?")

//         while (doneYet === "no") {
//             let newTopping = prompt("What topping do we add?")
//             this.toppings.push(newTopping)
//             alert (`Your pizza has ${this.toppings} on it`)
//             doneYet = prompt("You wanna add anything else?")
//         } 
//     }
// }

function PizzaOven (style, size, toppings, tempF, sliceCount) {
    this.style =  style,
    this.size = size,
    this.toppings = toppings,
    this.tempF = tempF, 
    this.sliceCount = sliceCount,

    this.removeSlice = function () {
        this.sliceCount--
    },

    this.stayedOut = function () {
        let timer = prompt("How long did you leave it out in minutes?")
        this.tempF -= timer
    }, 

    this.addFridgeToppings = function () {
        let doneYet = prompt("You wanna add anything else?")

        while (doneYet === "no") {
            let newTopping = prompt("What topping do we add?")
            this.toppings.push(newTopping)
            alert (`Your pizza has ${this.toppings} on it`)
            doneYet = prompt("You wanna add anything else?")
        } 
    }
}

let mypizza = new PizzaOven("Chicago", "8 Inch", ["pepperoni", "cheese"], 140, 12)

console.log(mypizza)