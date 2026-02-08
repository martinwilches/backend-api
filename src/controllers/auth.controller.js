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

        const token = await authService.login(email, password)

        res.json(token)
    }

    static register(req, res) {
        const { email, password, role } = req.body

        const user = authService.register(email, password, role)

        res.status(201).json(user)
    }
}

export default Auth
