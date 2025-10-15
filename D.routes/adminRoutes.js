// D.routes/adminRoutes.js
const express = require('express')
const router = express.Router()
const { isLoggedIn, authRole } = require('../E.middleware/authMiddleware')
const adminController = require('../C.controllers/adminController')

// Painel ADM
router.get('/dashboard', isLoggedIn, authRole('adm'), adminController.dashboard)

// Gerenciar dados
router.get('/admin/professores', isLoggedIn, authRole('adm'), adminController.listarPf)
router.get('/admin/alunos', isLoggedIn, authRole('adm'), adminController.listarAl)
router.get('/admin/funcionarios', isLoggedIn, authRole('adm'), adminController.listarFc)

module.exports = router
