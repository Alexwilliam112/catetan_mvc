'use strict'

class View {

    static showPokemon(data) {
        console.log("=====VIEW======")
        console.table(data);
    }

    static addSuccess(newPokemon) {
        console.log(`SUCCESSFULLY ADDED: ${newPokemon.name} , ${newPokemon.type}`)
    }

    static deleteSuccess(deletedData) {
        console.log(`DELETED POKEMON: ${deletedData.id}, ${deletedData.name}, ${deletedData.type}`);
    }

    static showErrorDelete() {
        console.log('ERROR: Object does not exist. Failed to Delete');
    }

}

module.exports = View