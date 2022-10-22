// Importamos todo el módulo de mongoose en una variable del mismo nombre
const mongoose = require('mongoose')
// Cargamos el módulo Schema desde Mongoose como solo lectura
const { Schema } = mongoose

// Creamos un Objeto de configuración utilizando el módulo Schema, con su respectiva configuración y tipos de datos aceptados
const usersSchema = new Schema({
    names: { type: String },
    email: { type: String },
    password: { type: String },
    edad: { type: Number },
    status: { type: Number, default: 1 },
    roll: { type: Number }
})
// Exportamos el Modelos utiliando el formato del módulo de mongoose, indicandole a mongodb como se debe llamar la tabla y el schema para los documentos
module.exports = mongoose.model('Users', usersSchema)