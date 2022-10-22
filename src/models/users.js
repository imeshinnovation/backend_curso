const mongoose = require('mongoose')

const { Schema } = mongoose

const usersSchema = new Schema({
    names: { type: String },
    email: { type: String },
    password: { type: String },
    edad: { type: Number },
    status: { type: Number, default: 1 },
    roll: { type: Number }
})

module.exports = mongoose.model('Users', usersSchema)