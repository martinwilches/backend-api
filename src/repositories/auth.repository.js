import bcrypt from 'bcryptjs'

const users = []

const login = (email, password) => {
    const user = users.find(u => u.email === email)

    if (!user) {
        throw {
            message: 'El usuario no se encuentra registrado',
            code: 'UNAUTHENTICATED',
            status: 401
        }
    }
}

const register = (email, password) => {
    // encriptar contraseña
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const newUser = {
        email,
        password: hashPassword
    }

    users.push(newUser)

    return newUser
}

export default {
    login,
    register
}