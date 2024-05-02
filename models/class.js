'use strict'

class Pokemon {
    constructor(id, name, type) {
        this.id = id
        this.name = name
        this.type = type
    }
}

class Factory {

    static createPokemon(id, name, type) {
        return new Pokemon(id, name, type)
    }
}

module.exports = Factory