import express from 'express'

import User from '../controllers/users.controller.js'
import auth from '../middlewares/auth.middleware.js' // auth middleware

const router = express.Router()

router.get('/profile', auth, User.profile)

export { router }
