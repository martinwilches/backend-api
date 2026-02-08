import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/env.js'

const auth = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization || !authorization.startsWith('Bearer ')) {
        const error = new Error('Token requerido')
        error.code = 'UNAUTHORIZED'
        error.status = 403
        throw error
    }

    const token = authorization.split(' ')[1]

    const decodedToken = jwt.verify(token, JWT_KEY)
    req.user = decodedToken
    next()
}

export default auth
