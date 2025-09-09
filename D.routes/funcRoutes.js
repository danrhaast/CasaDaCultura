const express = require('express')
const router = express.Router()
const funcController = require('../C.controllers/funcController')

router.get('/funcionarios', funcController.listarFc)
router.post('/cadastroFunc', funcController.cadastrarFc)
router.get('/deletar/:id', funcController.deletarFc)

module.exports = router