const Alunos = require('../B.models/alunosModels')
const bcrypt = require('bcrypt')

const cadastrarAl = async (req, res) => {
    try {
        const senhaHash = await bcrypt.hash(req.body.senha, 10)
        await Alunos.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            genero: req.body.genero,
            senha: senhaHash
        })

        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaHash,
            role: 'aluno'
        })


        res.redirect('/alunos')
    } catch (error) {
        console.log('Erro na matrícula: ', error)
        res.status(500).send('Erro ao cadastrar aluno')
    }
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

const perfil = async (req, res) => {
    try {
        const aluno = await Alunos.findByPk(req.session.user.id)
        res.render('Alunos/perfilAluno', { aluno, title: 'Meu Perfil' })
    } catch (error) {
        console.log('Erro ao carregar perfil:', error)
        res.status(500).send('Erro ao carregar perfil')
    }
}

module.exports = {
    perfil,
    cadastrarAl,
    listarAl,
    deletarAl
}