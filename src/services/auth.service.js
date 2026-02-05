import authRepository from '../repositories/auth.repository.js'

const login = async (email, password) => {
    if (!email || !password) {
        throw {
            message: 'El email y la contraseña son requeridos',
            code: 'INVALID_CREDENTIALS',
            status: 400
        }
    }

    authRepository.login(email, password)
}

const register = (email, password) => {
    if (!email || !password) {
        throw {
            message: 'El email y la contraseña son requeridos',
            code: 'INVALID_CREDENTIALS',
            status: 400
        }
    }

    return authRepository.register(email, password)
}

export default {
    login,
    register
}