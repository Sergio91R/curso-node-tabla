const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const color = require('colors');

const crearArchivo = async(tabla = 5, listar = false, hasta = 10 ) => {

try {
    
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
        salida += `${tabla} X ${i} = ${tabla * i}\n`;
    }

    if(listar){
        console.log('======================='.yellow);
        console.log('tabla del:'.red, tabla);
        console.log('======================='.green);
        console.log(salida.rainbow);
    }

    fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida,);

    return (`tabla-${tabla}.txt`);
} catch (err) {
    throw err
}

}

module.exports = {
    crearArchivo
}