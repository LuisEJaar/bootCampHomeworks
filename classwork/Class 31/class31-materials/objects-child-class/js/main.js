//Create an a class and extend it - Can be anything you would like it to be! 

class human {
    constructor(name,age,sex) {
        this.name = name,
        this.age = age, 
        this.sex = sex
    }
}

class booThang extends human {
    constructor(name, favFood) {
        super(name)
        this.favFood = favFood
    }
}

let kaitlin = new booThang("Kaitlin", "Macaroni")