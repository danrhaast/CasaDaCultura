// C.controllers/aulaController.js
const Aula = require('../B.models/aulaModels')
const Professores = require('../B.models/profeModels')

// ADM: Criar aula
const criarAula = async (req, res) => {
    try {
        await Aula.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            horario: req.body.horario,
            professorId: req.body.professorId
        })
        res.redirect('/admin/aulas')
    } catch (error) {
        console.log('Erro ao criar aula:', error)
        res.status(500).send('Erro ao criar aula')
    }
}

// ADM: Editar aula
const editarAula = async (req, res) => {
    try {
        await Aula.update(
            {
                nome: req.body.nome,
                descricao: req.body.descricao,
                horario: req.body.horario,
                professorId: req.body.professorId
            },
            { where: { id: req.params.id } }
        )
        res.redirect('/admin/aulas')
    } catch (error) {
        console.log('Erro ao editar aula:', error)
        res.status(500).send('Erro ao editar aula')
    }
}

// ADM: Deletar aula
const deletarAula = async (req, res) => {
    try {
        await Aula.destroy({ where: { id: req.params.id } })
        res.redirect('/admin/aulas')
    } catch (error) {
        console.log('Erro ao deletar aula:', error)
        res.status(500).send('Erro ao deletar aula')
    }
}

// Aluno & Professor: Listar aulas
const listarAulas = async (req, res) => {
    try {
        const aulas = await Aula.findAll({ include: Professores })
        res.render('Aulas/listaAulas', { aulas, title: 'Lista de Aulas' })
    } catch (error) {
        console.log('Erro ao listar aulas:', error)
        res.status(500).send('Erro ao listar aulas')
    }
}

// Consultar detalhes de uma aula
const detalhesAula = async (req, res) => {
    try {
        const aula = await Aula.findByPk(req.params.id, { include: Professores })
        res.render('Aulas/detalheAula', { aula, title: 'Detalhes da Aula' })
    } catch (error) {
        console.log('Erro ao buscar aula:', error)
        res.status(500).send('Erro ao buscar aula')
    }
}

module.exports = {
    criarAula,
    editarAula,
    deletarAula,
    listarAulas,
    detalhesAula
}
