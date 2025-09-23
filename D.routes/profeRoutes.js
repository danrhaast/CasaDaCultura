// D.routes/profeRoutes.js
const express = require('express')
const router = express.Router()
const { isLoggedIn, authRole } = require('../middleware/authMiddleware')
const profeController = require('../C.controllers/profeController')

// Perfil do professor
router.get('/professor/perfil', isLoggedIn, authRole('professor'), profeController.perfil)

// Consultar alunos, horários e aulas
router.get('/professor/alunos', isLoggedIn, authRole('professor'), profeController.listarAlunos)
router.get('/professor/horarios', isLoggedIn, authRole('professor'), profeController.listarHorarios)
router.get('/professor/aulas', isLoggedIn, authRole('professor'), profeController.listarAulas)

module.exports = router
