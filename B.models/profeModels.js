const db = require('../A.banco_de_dados/db')

const Professores = db.sequelize.define('professores', {
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
    aulas:{
        type: db.Sequelize.STRING,
    },
    horarios: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    }
})

//Professores.sync({force: true})

module.exports = Professores