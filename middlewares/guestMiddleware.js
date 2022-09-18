function guestMiddleware(req, res, next) {
    if(req.session.userLogged) { //tengo alguien en session?
        return res.redirect('/products');
    }
    next();
}

module.exports = guestMiddleware;