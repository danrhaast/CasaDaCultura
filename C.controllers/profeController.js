const Professores = require('../B.models/profeModels')
const Usuario = require('../B.models/usuarioModels')
const bcrypt = require('bcrypt')

const cadastrarPf = async (req, res) => {
    try {
        const senhaHash = await bcrypt.hash(req.body.senha, 10)
        await Professores.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            aulas: Array.isArray(req.body.aulas) ? req.body.aulas.join(', '): req.body.aulas,
            horarios: req.body.horarios,
            genero: req.body.genero,
            senha: senhaHash
        })

        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaHash,
            role: 'professor'
        })


        res.redirect('/professores')
    } catch (error) {
        console.log('Erro no cadastro: ', error)
        res.status(500).send('Erro ao cadastrar professor')
    }
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

const perfil = async (req, res) => {
    try {
        const professor = await Professores.findByPk(req.session.user.id)
        res.render('Professores/perfilProfe', { professor, title: 'Meu Perfil' })
    } catch (error) {
        console.log('Erro ao carregar perfil:', error)
        res.status(500).send('Erro ao carregar perfil')
    }
}

module.exports = {
    cadastrarPf,
    listarPf,
    deletarPf,
    perfil
}