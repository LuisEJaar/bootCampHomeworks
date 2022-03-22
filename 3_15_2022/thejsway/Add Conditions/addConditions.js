// function nextDay () {
//     let day = prompt("Tell me a day and I'll tell you which follows it:")
//     day = day.toLowerCase()
//     if (day === "monday") {
//         alert("The next day is Tuesday")
//     } else if (day === "tuesday") {
//         alert("The next day is Wednesday")
//     } else if (day === "wednesday") {
//         alert("The next day is Thursday")
//     } else if (day === "thursday") {
//         alert("The next day is Friday")
//     } else if (day === "friday") {
//         alert("The next day is Saturday")
//     } else if (day === "saturday") {
//         alert("The next day is Sunday")
//     } else if (day === "sunday") {
//         alert("The next day is Monday")
//     } else {
//         alert("That's not a day and you know it")
//     }
// }

// nextDay ()

// function numberComparrison () {
//     let num1 = Number(prompt("Give me a numbah, I dare ya"))
//     let num2 = Number(prompt("Oh uhm.. bet you won't do it again"))
//     if (num1 > num2) {
//         alert("well, the first one is bigger")
//     } else if (num2 > num1) {
//         alert("Oh you went big for the second I see")
//     } else if (num1 === num2) {
//         alert("not very creative in the numbers department eh?")
//     } else {
//         alert("Hey what are you trying to pull here?")
//     }
// }

// numberComparrison ()

// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));
// let nb1=nb2=nb3=4
// let nb1=4,nb2=3,nb3=2
let nb1=2,nb2=4,nb3=0
if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final 
// values of variables nb1, nb2 and nb3 depending on
//  their initial values. Complete the following table.

//all = 4
// nb1 final value	0
// nb2 final value	4
// nb3 final value  12

// nb1=4,nb2=3,nb3=2
// nb1 final value	4
// nb2 final value	3
// nb3 final value  2

// nb1=2,nb2=4,nb3=0
// nb1 final value	3
// nb2 final value	4
// nb3 final value  0


// function daysInMonth () {
//     let month = Number(prompt("Hey user, give me a month, 1-12"))
//     if (month % 2 != 0 && month < 13) {
//         alert("That month has 31 days")
//     } else if (month % 2 === 0 && month < 13) {
//         if (month != 2) {
//             alert("That month has 30 days")
//         } else {
//             alert("That month has 28 days")
//         }
//     }  else {
//         alert("I'm gonna call your mum if you keep playing games")
//     }
// }

// daysInMonth ()

function followingSecond () {
    let userTimeH = Number(prompt("Alright buddy, what time is it? Give me the hour (military s tyle):"))
    let userTimeM = Number(prompt("Give me the minute:"))
    let userTimeS = Number(prompt("Give me the second:"))

    if (userTimeS != 59) {
        userTimeS += 1
        alert(`${userTimeH}h${userTimeM}m${userTimeS}s`)
    } else if (userTimeS === 59) {
        if (userTimeM != 59){
            userTimeS = 0
            userTimeM += 1
            alert(`${userTimeH}h${userTimeM}m${userTimeS}s`)
        } else {
            } if (userTimeH != 23) {
                userTimeS = 0
                userTimeM = 0
                userTimeH += 1
                alert(`${userTimeH}h${userTimeM}m${userTimeS}s`)
            } else {
                alert("0h0m0s")
            }
    }
}

let again = "yes"

while (again === "yes") {
    followingSecond ()
    again = prompt("Again? yes / no")
}
