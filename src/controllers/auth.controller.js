import authService from '../services/auth.service.js'

class Auth {
    static login(req, res) {
        const { email, password } = req.body

        authService.login(email, password)
    }

    static register(req, res) {
        const { email, password } = req.body

        const user = authService.register(email, password)

        res.status(201).json({
            user
        })
    }
}

export default Auth