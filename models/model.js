'use strict'

const { readFileSync, writeFileSync, write } = require('fs')
const Factory = require('./class')

class Model {

    static read() {  //returning array of instance
        let data = readFileSync('./data/pokemons.json')
        let pokemons = JSON.parse(data)

        let instanceArr = pokemons.map((el) => {
            const { id, name, type } = el
            return Factory.createPokemon(id, name, type)
        })

        return instanceArr
    }

    static add(name, type) {  //MANDATORY ADD NEW DATA DALAM BENTUK OBJECT INSTANCE
        const newData = Model.read()
        let id = newData[newData.length - 1].id + 1

        const newPokemon = Factory.createPokemon(id, name, type)
        newData.push(newPokemon)

        writeFileSync('./data/pokemons.json', JSON.stringify(newData, null, 4))

        return newPokemon
    }

    static delete(id) {
        const data = Model.read()

        const deletedData = data.find((el) => {
            return el.id === Number(id)
        })

        if(!deletedData) {
            return 'Not Found'
        }

        let newData = data.filter((el) => {
            return el.id !== Number(id)
        })

        writeFileSync('./data/pokemons.json', JSON.stringify(newData, null, 4))

        return deletedData
    }

}

module.exports = Model