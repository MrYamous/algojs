class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky(){
        // utiliser Math.random()
        // comparer avec la luck du pokemon
        // retourner le résultat de luck > Math.random()
    }

    attackPokemon(){
        // compter les degats infligés (pokemonQuiAttacke.atq - pokemonQuiSeFaitAttaquer.def)
        // condition avec isLucky 
            // SI isLucky TRUE ALORS pokemon attackPokemon
                    // réduire les hp du pokemon attaqués (pokemonQuiSeFaitAttaquer.hp -= degat)
                    // afficher les hp restants + les degats infligés
            // SINON ALORS l'attaque echoue
    }
}

// instanciation pokemon1
// instanciation pokemon2

// déroulement du combat

// TANT QUE pokemon1.hp > 100 ET pokemon2.hp > 100
    // pokemon1 attaque pokemon2
    // SI pokemon2.hp < 0
    // ALORS pokemon2 meurt et le combat s'arrete
    // pokemon2 attaque pokemon1
    // SI pokemon1.hp < 0
    // ALORS pokemon1 meurt et le combat s'arrete