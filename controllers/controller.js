'use strict'

const Model = require('../models/model')
const View = require('../views/view')

class Controller {

    static read() {
        let pokemons = Model.read()
        View.showPokemon(pokemons)
    }

    static add(name, type) {
        let newPokemon = Model.add(name, type)
        View.addSuccess(newPokemon)
    }

    static delete(id) {
        let deletedPokemon = Model.delete(id)

        if(deletedPokemon === 'Not Found') {
            View.showErrorDelete()
        } else {
            View.deleteSuccess(deletedPokemon)
        }
    }

}

module.exports = Controller