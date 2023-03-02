const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe:'Muestra la tabla en persona'
    })
    .option('h',{
        alias: 'Hasta',
        type: 'number',
        default: 10,
        describe:'Es el limite de la tabla de miltiplicar'
    }
    )
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;