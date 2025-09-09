// D.routes/aulaRoutes.js
const express = require('express')
const router = express.Router()
const { isLoggedIn, authRole, authRoles } = require('../E.middleware/authMiddleware')
const aulaController = require('../C.controllers/aulaController')

// 🔹 Rota para listar aulas (Aluno e Professor podem ver)
router.get('/aulas', isLoggedIn, authRoles(['aluno', 'professor', 'adm']), aulaController.listarAulas)

// 🔹 Rota para ver detalhes de uma aula
router.get('/aulas/:id', isLoggedIn, authRoles(['aluno', 'professor', 'adm']), aulaController.detalhesAula)

// 🔹 Rotas exclusivas ADM
router.post('/admin/aulas', isLoggedIn, authRole('adm'), aulaController.criarAula)
router.post('/admin/aulas/:id/editar', isLoggedIn, authRole('adm'), aulaController.editarAula)
router.get('/admin/aulas/:id/deletar', isLoggedIn, authRole('adm'), aulaController.deletarAula)

module.exports = router
