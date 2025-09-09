const express = require('express')
const router = express.Router()
const alunosController = require('../C.controllers/alunosController')

router.get('/alunos', alunosController.listarAl)
router.post('/matricula', alunosController.cadastrarAl)
router.get('/deletar/:id', alunosController.deletarAl)

module.exports = router