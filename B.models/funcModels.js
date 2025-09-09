const db = require('../A.banco_de_dados/db')

const Funcionarios = db.sequelize.define('funcionarios', {
    nome: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    telefone: {
        type: db.Sequelize.STRING,
    },
    cpf: {
        type: db.Sequelize.STRING,
    },
    genero: {
        type: db.Sequelize.STRING,
    },
    funcao:{
        type: db.Sequelize.STRING,
    },
    horarios: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    }
})

//Funcionarios.sync({force: true})

module.exports = Funcionarios