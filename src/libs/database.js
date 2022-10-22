// Cargamos la Librería de Mongoose (Driver para MongoDB)
const mongoose = require('mongoose')
// Cargo el Componente KEYS invocando la clase mongodb
const { mongodb } = require('./keys')

// Creamos la Clase database
const database = {
// Creamos el Método connect
    connect: () => {
        // Utilizamos la clase mongoose conel método connect para crear la conexión del Driver y le pasamos el componente mongodb almacenado en keys con la variable URI
        mongoose.connect(mongodb.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // En caso de No encontrar ningún error la promesa devuelve un mensaje satisfactorio
        }).then(() => {
            console.log('Conexión a la Base de Datos Establecida con Exito!')
            // En Caso de Detectar error en la conexión la promesa devuelve un mensaje de falla
        }).catch(() => {
            console.log('Error de Conexión a la Base de Datos!')
        })
    }

}
// Exportamos la clase database
module.exports = database