import usersService from '../services/users.service.js'
import userService from '../services/users.service.js'

/************
 * Controller
 * - Solo HTTP
 * - Lee req, envía res
 * - Maneja status code
*/

async function getAll(req, res) {
    // creación de cookie llamada `user` con el valor `martin`
    res.cookie('user', 'martin', {
        httpOnly: true // impiden que scripts del lado del cliente accedan a la cookie
    })

    const users = await userService.getAll()

    res.json(users)
}

async function getById(req, res) {
    const user = await usersService.getById(req.params?.id)

    res.json(user)
}

async function create(req, res) {
    const user = await userService.create(req.body)

    res.status(201).json(user)
}

async function update(req, res) {
    const user = await userService.update(req.params?.id, req.body)

    res.json(user)
}

async function remove(req, res) {
    await userService.remove(req.params?.id)

    res.status(204).send()
}

async function profile(req, res) {
    // acceder al valor de la cookie
    const cookie = req.cookies

    res.json({
        token: cookie
    })
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    profile
}

