function requireAuth(req, res, next) {
    if (!req.session.user) {
      return res.redirect('/login'); // Redirige a la página de inicio de sesión si no hay sesión activa
    }
    next();
  }
module.exports = requireAuth