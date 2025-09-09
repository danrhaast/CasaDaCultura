const Funcionarios = require('../B.models/funcModels')

const cadastrarFc = (req, res) => {
    Funcionarios.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        genero: req.body.genero,
        funcao: req.body.funcao,
        horarios: req.body.horarios,
        senha: req.body.senha
    }).then(() => res.redirect('/funcionarios'))
        .catch(error => console.log('Erro no cadastro: ', error))
}

const listarFc = (req, res) => {
    Funcionarios.findAll({ order: [['id', 'DESC']] })
        .then(funcionarios => {
            res.render('Funcionarios/tabFunc', { funcionarios: funcionarios, title: 'Lista de Funcionarios' })
        }).catch(error => console.log('Erro ao listar Funcionarios', error))
}

const deletarFc = (req, res) => {
    Funcionarios.destroy({
        where: { id: req.params.id }
    }).then(() => res.redirect('/funcionarios'))
        .catch(error => console.log('Erro ao deletar professor: ', error))
}

module.exports = {
    cadastrarFc,
    listarFc,
    deletarFc
}