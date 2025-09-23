// B.models/usuarioModel.js
const db = require('../A.banco_de_dados/db')

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    senha: {
        type: db.Sequelize.STRING,
    },
    role: {
        type: db.Sequelize.ENUM('aluno', 'professor', 'adm'),
        allowNull: false
    }
})

//Usuario.sync({ force: true }) 

module.exports = Usuario
