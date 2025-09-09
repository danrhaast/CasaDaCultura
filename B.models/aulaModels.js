// B.models/aulaModel.js
const db = require('../A.banco_de_dados/db')

const Aula = db.sequelize.define('aulas', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    horario: {
        type: db.Sequelize.STRING, // exemplo: "13:30 - 14:30"
        allowNull: false
    },
    professorId: {
        type: db.Sequelize.INTEGER,
        allowNull: true // professor associado à aula
    }
})

//Aula.sync({ force: true }) // só na primeira vez

module.exports = Aula
