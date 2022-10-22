const Router = require('express').Router()
const users = require('../models/users')

Router.get('/', (req, res) => {
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



module.exports = Router