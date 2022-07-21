function methodNotAllowed(req, res, next){
    return next({
        status: 405,
        message: `${req.method} is not allowed for ${req.originalUrl}`
    })
}

module.exports = methodNotAllowed;