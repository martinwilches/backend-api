import express from 'express'
import User from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', User.users)
userRouter.get('/profile', User.profile)

export default userRouter