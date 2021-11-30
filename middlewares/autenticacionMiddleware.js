//RUTAS ACCESIBLES SIN LOGIN-->>REDIRECCIONAN AL LOGIN

function autenticacionMiddleware(req, res, next){
    if(!req.session.userLogged) { //si NO tengo a nadie en sesion, lo redirecciono al login
        return res.redirect('/acceso');
    }

    next();

}

module.exports = autenticacionMiddleware;