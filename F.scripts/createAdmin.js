// F.scripts/createAdmin.js
const bcrypt = require('bcrypt');
const Usuario = require('../B.models/usuarioModels');
const db = require('../A.banco_de_dados/db');

(async () => {
    try {
        await db.sequelize.sync(); // garante que a tabela exista

        const senhaHash = await bcrypt.hash('admin123', 10);

        const [admin, created] = await Usuario.findOrCreate({
            where: { email: 'admin@cultura.com' },
            defaults: {
                nome: 'Administrador',
                email: 'admin@cultura.com',
                senha: senhaHash,
                role: 'adm'
            }
        });

        if (created) {
            console.log('✅ Usuário admin criado com sucesso!');
        } else {
            console.log('⚠️ Usuário admin já existia.');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Erro ao criar admin:', error);
        process.exit(1);
    }
})();
