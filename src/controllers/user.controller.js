class User {
    static users(req, res) {
        // creación de cookie llamada user con el valor martin
        res.cookie('user', 'martin', {
            httpOnly: true // impiden que scripts del lado del cliente accedan a la cookie
        })

        res.json({
            message: 'Cookie creada',
            data: {
                id: 1,
                nombre: 'Martin'
            }
        })
    }

    static profile(req, res) {
        // acceder al valor de la cookie
        const cookie = req.cookies
        
        res.json({
            token: cookie
        })
    }
}

export default User