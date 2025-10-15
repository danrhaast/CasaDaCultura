const Professores = require('../B.models/profeModels')
const Alunos = require('../B.models/alunosModels')
const Funcionarios = require('../B.models/funcModels')

const dashboard = async (req, res) => {
    try {
        const totalProfessores =  await Professores.count()
        const totalAlunos =  await Alunos.count()
        const totalFuncionarios = await Funcionarios.count()

        res.render('Admin/dashboard', {
            title: 'Painel Administrativo',
            user: req.session.user,
            totalProfessores,
            totalAlunos,
            totalFuncionarios
        })
    } catch(error) {
        console.error('Erro ao carregar dashboard', error)
        res.status(500).send('Erro ao carregar painel administrativo')
    }
}

const listarPf = async (req, res) => {
    Professores.findAll({ order: [['id', 'DESC']] })
        .then(professores => {
            res.render('Professores/tabProfe', { professores: professores, title: 'Lista de Professores' })
        }).catch(error => console.log('Erro ao listar Professores', error))
}

const listarAl = async(req, res) => {
    Alunos.findAll({ order: [['id', 'DESC']] })
        .then(alunos => {
            res.render('Alunos/tabAlunos', { alunos: alunos, title: 'Lista de alunos' })
        }).catch(error => console.log('Erro ao listar alunos', error))
}

const listarFc = async (req, res) => {
    Funcionarios.findAll({ order: [['id', 'DESC']] })
        .then(funcionarios => {
            res.render('Funcionarios/tabFunc', { funcionarios: funcionarios, title: 'Lista de Funcionarios' })
        }).catch(error => console.log('Erro ao listar Funcionarios', error))
}

module.exports = {
    dashboard,
    listarPf,
    listarAl,
    listarFc
}