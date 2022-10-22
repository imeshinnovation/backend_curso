// Invoco las librerias y las importo en una variable de solo lectura por cada una

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./libs/database')

// Habilitamos la Configuración del ENV
dotenv.config()

// Conectamos la Base de Datos
database.connect()

// Acotamos el process.env a una variable llamada env
const env = process.env

// Creo una instancia de servidor
const app1 = express()

// Parametro USE para cargar el middleware Morgan
app1.use(morgan('dev'))

// Definir una variable de configuración para mi servidor Puerto
app1.set('puerto', env.PORT)

// Definir una variable de configuracion IP
app1.set('ip', env.IP)

// Cargamos el Archivo Inicial de Rutas a la Raíz
app1.use('/', require('./routes/index'))

// Llamo la variable de configuración puerto en mi servidor y la ip
app1.listen(app1.get('puerto'), app1.get('ip'), () => {
    console.log('Servidor Iniciado en el Puerto:', app1.get('puerto'))
})