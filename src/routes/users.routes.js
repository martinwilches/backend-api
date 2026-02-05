import express from 'express'
import userController from '../controllers/users.controller.js'

import { validateMiddleware } from '../middlewares/validate.middleware.js'
import { createUser } from '../validators/users.validator.js'

const router = express.Router()

// obtener usuario(s)
router.get('/', userController.getAll)
router.get('/:id', userController.getById)

// crear usuario (validador // middleware)
router.post('/', createUser, validateMiddleware, userController.create)

// actualizar usuario
router.put('/:id', userController.update)

// eliminar usuario
router.delete('/:id', userController.remove)

router.get('/profile', userController.profile)

export {
    router
}
