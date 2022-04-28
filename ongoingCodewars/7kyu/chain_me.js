function chain(input, fs) {
    let answer = fs.reduce( (prev,fxn) => {return fxn(prev)}, input)
    return answer
    }