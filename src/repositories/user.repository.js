/**
 * Repository
 * - Leer/Escribir datos
 * - DB, arrays, API's externas
*/

let users = []

const getAll = async () => {
    return users
}

const getById = async (param) => {
    return users.find(u => u.id == param)
}

const create = async (data) => {
    const user = { id: users.length + 1, ...data }
    users.push(user)

    return user
}

const update = async (param, data) => {
    const user = users.find(u => u.id == param)

    // copiar las propiedades de un objeto fuente a un objeto destino (target, source)
    Object.assign(user, data)

    return user
}

const remove = async (param) => {
    users = users.filter(u => u.id != param)
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}