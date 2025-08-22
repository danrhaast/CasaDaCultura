const dotenv = require('dotenv').config()
const { error } = require('console')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.SEQUELIZE_DATABASE,
    process.env.SEQUELIZE_USERNAME,
    process.env.SEQUELIZE_PASSWORD,
    {
        host: process.env.SEQUELIZE_HOST || 'localhost',
        dialect: 'mysql'
    }
)


sequelize.authenticate() 
    try {
        console.log('Conectado com sucesso!')
    }
    catch (error) {
        console.log('Falha na conexão: ' + error);
    }

module.exports = {
    Sequelize,
    sequelize
}
