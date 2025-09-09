const express = require('express')
const router = express.Router()
const profeController = require('../C.controllers/profeController')

router.get('/professores', profeController.listarPf)
router.post('/cadastro', profeController.cadastrarPf)
router.get('/deletar/:id', profeController.deletarPf)

module.exports = router