//RUTAS ACCESIBLES SOLO CON LOGIN-->>REDIRECCIONAN AL PERFIL

/*function clienteMiddleware(req, res, next){
    if(req.session.userLogged) { //si el usuario esta logeado en sesion, automaticamente lo redireccion al perfil
        return res.redirect('/perfilUsuario');
    }

    next();

}

module.exports = clienteMiddleware;*/