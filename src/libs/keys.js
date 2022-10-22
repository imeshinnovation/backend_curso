// Importamos el módulo dotenv en la variable de solo lectura dotenv
const dotenv = require('dotenv')
// Ejecutamos la variable dotenv con el método config
dotenv.config()

// Acotamos el process.env en una variable de nombre env
const env = process.env
// Exportamos el Objecto mongodb con una llave JSON URI
module.exports = {
    mongodb: {
        URI: `mongodb://${env.USERDB}:${env.PASSWD}@${env.SERVER}:${env.DBPORT}/${env.DATABASE}?authSource=admin`
    }
}

