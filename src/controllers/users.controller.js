class User {
    static profile = (req, res) => {
        // envío de headers desde el servidor al cliente
        res.set('X-App-Version', '1.0.0')

        res.end()
    }
}

export default User
