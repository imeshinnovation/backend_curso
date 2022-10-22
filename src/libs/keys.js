const { connection } = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

const env = process.env

module.exports = {
    mongodb: {
        URI: `mongodb://${env.USERDB}:${env.PASSWD}@${env.SERVER}:${env.DBPORT}/${env.DATABASE}?authSource=admin`
    }
}

