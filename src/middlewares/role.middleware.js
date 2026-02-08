const role = (roles = []) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            const error = new Error(
                'El rol del usuario no le permite realizar esta acción'
            )
            error.code = 'UNAUTHORIZED'
            error.status = 403
            throw error
        }

        next()
    }
}

export default role
