const mongoose = require('mongoose')
const { mongodb } = require('./keys')

const database = {

    connect: () => {
        mongoose.connect(mongodb.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Conexión a la Base de Datos Establecida con Exito!')
        }).catch(() => {
            console.log('Error de Conexión a la Base de Datos!')
        })
    }

}

module.exports = database