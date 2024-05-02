'use strict'

const Controller = require('./controllers/controller')

const [command, input1, input2] = process.argv.slice(2)

switch (command) {

    case 'read':
        Controller.read()
        break;

    case 'add':
        Controller.add(input1, input2)
        break;

    case 'delete':
        Controller.delete(input1)
        break;

    default:
        console.log('input command');
        break;
}