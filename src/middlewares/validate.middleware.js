import { validationResult } from 'express-validator'

// middleware de validación (POST creación de usuarios)
export const validateMiddleware = (req, res, next) => {
    const errors = validationResult(req) // datos validados en validator.user (email, password, name)

    // si el resultado de la validación contiene errores
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                message: 'Datos inválidos',
                details: errors.array()
            }
        })
    }

    next()
}