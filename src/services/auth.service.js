import authRepository from '../repositories/auth.repository.js'

const validateCredentials = (email, password) => {
    if (!email || !password) {
        const error = new Error('El email y la contraseña son requeridos')
        error.code = 'INVALID_DATA'
        error.status = 400
        throw error
    }
}

const login = async (email, password) => {
    validateCredentials(email, password)
    return authRepository.login(email, password)
}

const register = (email, password) => {
    validateCredentials(email, password)
    return authRepository.register(email, password)
}

export default { login, register }
