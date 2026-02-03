import userRepository from '../repositories/user.repository.js'

/*********
 * Service
 * - Validaciones
 * - Decisiones
 * - Orquestar datos
 * - Lanzar errores
*/

// el service no sabe nada de express
const getAll = async () => {
    return await userRepository.getAll()
}

const getById = async (param) => {
    const user = userRepository.getById(param)

    if (!user) {
        throw {
            message: 'Usuario no encontrado',
            code: 'USER_NOT_FOUND',
            status: 404
        }
    }

    return user
}

const create = async (data) => {
    if (!data.email) {
        throw {
            message: 'Email requerido',
            code: 'EMAIL_REQUIRED',
            status: 400
        }
    }

    return await userRepository.create(data)
}

const update = async (param, data) => {
    const user = await userRepository.update(param, data)

    if (!user) {
        throw {
            message: 'Usuario no encontrado',
            status: 'USER_NOT_FOUND',
            code: 404
        }
    }

    return user
}

const remove = async (param) => {
    await userRepository.remove(param)
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}