const Usuario = require('../B.models/usuarioModels')
const bcrypt = require('bcrypt')

async function login(req, res) {
    const { email, senha} = req.body
    const user = await Usuario.findOne({ where: {email}})

    if (!user) return res.status(403).send('Usuário não encontrado')

    const senhaValida = await bcrypt.compare(senha, user.senha)
    if (!senhaValida) return res.send('Senha incorreta')

    req.session.user = { id: user.id, role: user.role, nome: user.nome}
    res.redirect('/dashboard')
}

function logout(req, res) {
    req.session.destroy()
    res.redirect('/login')
}

module.exports = { login, logout}