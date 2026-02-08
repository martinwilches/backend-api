import authService from '../services/auth.service.js'

/************
 * CONTROLLER
 * - Solo HTTP
 * - Lee req, envía res
 * - Maneja status code
*/

class Auth {
    static async login(req, res) {
        const { email, password } = req.body

        const authUser = await authService.login(email, password)

        res.json(authUser)
    }

    static register(req, res) {
        const { email, password } = req.body

        const user = authService.register(email, password)

        res.status(201).json(user)
    }
}

export default Auth
