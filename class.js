class Guerrier {
    constructor(attack, defense, hp) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }

    getAttack() {
        console.log(this.attack)
    }
}

let Alexis = new Guerrier(20, 10)
let Mickael = new Guerrier(10, 30)

//Alexis.getAttack()
//Mickael.getAttack()

class Survivant {
    constructor(prenom) {
        this.prenom = prenom
    }
}

let Matthieu = new Survivant("Matthieu")
Matthieu.getAttack;