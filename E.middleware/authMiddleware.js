// middleware/authMiddleware.js

// Permite apenas um papel específico
function authRole(role) {
    return (req, res, next) => {
        if (req.session.user && req.session.user.role === role) {
            return next();
        }
        res.status(403).send('Acesso negado: você não possui permissão.');
    };
}

// Permite múltiplos papéis
function authRoles(roles) {
    return (req, res, next) => {
        if (req.session.user && roles.includes(req.session.user.role)) {
            return next();
        }
        res.status(403).send('Acesso negado: você não possui permissão.');
    };
}

// Verifica se o usuário está logado
function isLoggedIn(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login'); // ou res.status(401).send("Não autenticado")
}

module.exports = { authRole, authRoles, isLoggedIn };
