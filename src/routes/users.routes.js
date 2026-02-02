import express from 'express'
import {
    getAll,
    getById,
    create,
    update,
    remove,
    profile
} from '../controllers/users.controller.js'

const router = express.Router()

// obtener usuario(s)
router.get('/', getAll)
router.get('/:id', getById)

// crear usuario
router.post('/', create)

// actualizar usuario
router.put('/:id', update)

// eliminar usuario
router.delete('/:id', remove)

router.get('/profile', profile)

export { router }
