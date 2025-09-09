const Professores = require('../B.models/profeModels')

const cadastrarPf = (req, res) => {
    Professores.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        genero: req.body.genero,
        aulas: Array.isArray(req.body.aulas) ? req.body.aulas.join(', ') : req.body.aulas,
        horarios: req.body.horarios,
        senha: req.body.senha
    }).then(() => res.redirect('/professores'))
        .catch(error => console.log('Erro no cadastro: ', error))
}

const listarPf = (req, res) => {
    Professores.findAll({ order: [['id', 'DESC']] })
        .then(professores => {
            res.render('Professores/tabProfe', { professores: professores, title: 'Lista de Professores' })
        }).catch(error => console.log('Erro ao listar Professores', error))
}

const deletarPf = (req, res) => {
    Professores.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect('/professores'))
        .catch(error => console.log('Erro ao deletar professor: ', error))
}

module.exports = {
    cadastrarPf,
    listarPf,
    deletarPf
}