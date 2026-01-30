class User {
    static getUsers(req, res) {
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
}

export default User