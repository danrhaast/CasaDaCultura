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
        validate: {
            isNumeric: true,
            len: [11]
        }
    },
    CPF: {
        type: db.Sequelize.STRING,
        validate: {
            isNumeric: true,
            len: [11]
        }
    },
    genero: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING,
        validate: {
            isNumeric: true,
            len: [10]
        }
    }
})

//Alunos.sync({force: true})

module.exports = Alunos