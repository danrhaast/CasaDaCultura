// scripts/createAdmin.js
require('dotenv').config()
const bcrypt = require('bcrypt')
const Usuario = require('../B.models/usuarioModels')
const db = require('../A.banco_de_dados/db')

async function main() {
  try {
    await db.sequelize.authenticate()
    console.log('Conexão ok')

    const email = 'admin@casacultura.local' // seu e-mail de admin
    const senha = 'daninhogotoso'           // defina uma senha segura

    // já existe?
    const exists = await Usuario.findOne({ where: { email } })
    if (exists) {
      console.log('⚠️ Admin já existe!')
      return process.exit(0)
    }

    const hash = await bcrypt.hash(senha, 10)
    await Usuario.create({
      nome: 'Administrador',
      email,
      senha: hash,
      role: 'adm'
    })

    console.log('✅ Admin criado com sucesso!')
    process.exit(0)
  } catch (err) {
    console.error('Erro ao criar admin:', err)
    process.exit(1)
  }
}

main()
