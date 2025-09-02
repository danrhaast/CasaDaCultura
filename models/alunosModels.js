const db = require('../banco_de_dados/db')

const Alunos = db.sequelize.define('alunos', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING,
    },
    cpf: {
        type: db.Sequelize.STRING,
    },
    genero: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING,
    }
})

//Alunos.sync({force: true})

module.exports = Alunos