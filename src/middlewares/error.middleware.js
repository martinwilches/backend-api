export const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Error interno',
            code: err.code || 'INTERNAL_ERROR'
        }
    })
}