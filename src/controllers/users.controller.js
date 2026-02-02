let users = [{
    id: 1,
    nombre: 'Martin'
}]

export function getAll(req, res) {
    // creación de cookie llamada `user` con el valor `martin`
    res.cookie('user', 'martin', {
        httpOnly: true // impiden que scripts del lado del cliente accedan a la cookie
    })

    if (!users.length) {
        return res.status(404).json({
            code: 'USERS_NOT_FOUND',
            message: 'Usuarios no encontrados'
        })
    }

    res.json(users)
}

export function getById(req, res) {
    const user = users.find(u => u.id == req.params.id) 

    if (!user) {
        return res.status(404).json({
            code: 'USER_NOT_FOUND',
            message: 'Usuario no encontrado'
        })
    }

    res.json(user)
}

export function create(req, res) {
    const user = { id: users.length + 1, ...req.body }
    users.push(user)

    res.status(201).json(user)
}

export function update(req, res) {
    const user = users.find(u => u.id == req.params.id)

    if (!user) {
        return res.status(404).json({
            code: 'USER_NOT_FOUND',
            message: 'Usuario no encontrado'
        })
    }

    // copiar las propiedades de un objeto fuente a un objeto destino (target, source)
    Object.assign(user, req.body)
    res.json(user)
}

export function remove(req, res) {
    users = users.filter(u => u.id != req.params.id)

    res.status(204).send()
}

export function profile(req, res) {
    // acceder al valor de la cookie
    const cookie = req.cookies
    
    res.json({
        token: cookie
    })
}