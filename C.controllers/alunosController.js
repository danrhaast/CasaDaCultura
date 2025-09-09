const Alunos = require('../B.models/alunosModels')

const cadastrarAl = (req, res) => {
    Alunos.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        genero: req.body.genero,
        senha: req.body.senha
    }).then(() => res.redirect('/alunos'))
        .catch(error => console.log('Erro na matrícula: ', error))
}

const listarAl = (req, res) => {
    Alunos.findAll({ order: [['id', 'DESC']] })
        .then(alunos => {
            res.render('Alunos/tabAlunos', { alunos: alunos, title: 'Lista de alunos' })
        }).catch(error => console.log('Erro ao listar alunos', error))
}



const deletarAl = (req, res) => {
    Alunos.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect('/alunos'))
        .catch(error => console.log('Erro ao deletar aluno: ', error))
}

module.exports = {
    cadastrarAl,
    listarAl,
    deletarAl
}