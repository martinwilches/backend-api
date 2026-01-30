import express from 'express'
import User from '../src/controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', User.getUsers)

export default userRouter