import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { JWT_KEY } from '../config/env.js'

const users = []

const login = (email, password) => {
    const user = users.find((u) => u.email === email)

    if (!user) {
        const error = new Error('El usuario no se encuentra registrado')
        error.code = 'UNAUTHENTICATED'
        error.status = 401
        throw error
    }

    // comparar contraseña encriptada con la contraseña enviada en la request
    const validatePassword = bcrypt.compareSync(password, user.password)

    if (!validatePassword) {
        const error = new Error('Credenciales invalidas')
        error.code = 'UNAUTHENTICATED'
        error.status = 401
        throw error
    }

    // crear token de autenticación
    const token = jwt.sign(
        {
            userId: user.id,
        },
        JWT_KEY,
        { expiresIn: '1hr' }
    )

    return {
        user: {
            id: user.id,
            email: user.email,
        },
        token,
    }
}

const register = (email, password) => {
    // encriptar contraseña
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const newUser = {
        id: users.length + 1,
        email,
        password: hashPassword,
    }

    users.push(newUser)

    return newUser
}

export default {
    login,
    register,
}
