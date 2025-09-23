// D.routes/adminRoutes.js
const express = require('express')
const router = express.Router()
const { isLoggedIn, authRole } = require('../middleware/authMiddleware')
const adminController = require('../C.controllers/adminController')

// Painel ADM
router.get('/admin/dashboard', isLoggedIn, authRole('adm'), adminController.dashboard)

// Gerenciar dados
router.get('/admin/professores', isLoggedIn, authRole('adm'), adminController.listarProfessores)
router.get('/admin/alunos', isLoggedIn, authRole('adm'), adminController.listarAlunos)
router.get('/admin/funcionarios', isLoggedIn, authRole('adm'), adminController.listarFuncionarios)

module.exports = router
