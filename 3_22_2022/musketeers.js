let musketeers = ["Athos", "Porthos", "Aramis"]

for (i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}

musketeers.push("D'Artagnan")

musketeers.forEach(index => console.log(index))

musketeers.splice(2,1)

for(let index of musketeers) {
    console.log(index)
}