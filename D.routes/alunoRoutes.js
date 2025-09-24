// D.routes/alunoRoutes.js
const express = require('express')
const router = express.Router()
const { isLoggedIn, authRole } = require('../E.middleware/authMiddleware')
const alunoController = require('../C.controllers/alunosController')

// Perfil do aluno
router.get('/aluno/perfil', isLoggedIn, authRole('aluno'), alunoController.perfil)

// Consultar aulas, professores e horários
//router.get('/aluno/aulas', isLoggedIn, authRole('aluno'), alunoController.listarAulas)
//router.get('/aluno/professores', isLoggedIn, authRole('aluno'), alunoController.listarProfessores)
//router.get('/aluno/horarios', isLoggedIn, authRole('aluno'), alunoController.listarHorarios)

module.exports = router
