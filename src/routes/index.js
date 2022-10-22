// Importamos el módulo de express con su método Router en una Variable de nombre Router
const Router = require('express').Router()
// Importamos el Schema almacenado en el archivo de modelado users a una variable de nombre users
const users = require('../models/users')

// Invocamos la Variable Router con el método GET apuntando a la Raíz del Servicio WEB
Router.get('/', (req, res) => {
    // Respondemos a la petición del Usuario Enviando un contenido HTML
    res.send(`
        <html>
            <head>
                <title>Backend</title>
            </head>
            <body>
                <h1>Bienvenido a mi Backend</h1>
            </body>
        </html>
    `)
})

// Exportamos Router 
module.exports = Router