const Funcionarios = require('../B.models/funcModels')
const Usuario = require('../B.models/usuarioModels')
const bcrypt = require('bcrypt')



const cadastrarFc = async (req, res) => {
    try {
        const senhaHash = await bcrypt.hash(req.body.senha, 10)
        await Funcionarios.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            funcao: req.body.funcao,
            horarios: req.body.horarios,
            genero: req.body.genero,
            senha: senhaHash
        })

        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaHash,
            role: 'funcionario'
        })


        res.redirect('/funcionarios')
    } catch (error) {
        console.log('Erro no cadastro: ', error)
        res.status(500).send('Erro ao cadastrar professor')
    }
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

const perfil = async (req, res) => {
    try {
        const funcionarios = await Funcionarios.findByPk(req.session.user.id)
        res.render('Funcionarios/perfilFunc', {professor, title: 'Meu perfil'})
    } catch (error) {
        console.log('Erro ao carregar perfil', error)
        res.status(500).send('Erro ao carregar perfil')
    }
}

module.exports = {
    cadastrarFc,
    listarFc,
    deletarFc,
    perfil
}