module.exports = (request, response, next) => {
    if (request.user && request.user.role === 'ADMIN') {
        next()
    } else {
        return response.status(403).json({
            message: 'Acceso invalido'
        })
    }
}