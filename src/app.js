import express from 'express'

import info from './controllers/info.controller.js'
import userRouter from '../routes/user.routes.js'

const app = express()

// middleware para leer JSON
app.use(express.json())

// middleware para rutas
app.get('/api/info', info)
app.use('/api/users', userRouter)

export default app 