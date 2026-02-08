import express from 'express'

import User from '../controllers/users.controller.js'

import auth from '../middlewares/auth.middleware.js' // auth middleware
import role from '../middlewares/role.middleware.js' // role middleware

const router = express.Router()

router.get('/profile', auth, role(['admin']), User.profile)

export { router }
