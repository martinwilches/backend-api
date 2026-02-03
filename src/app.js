import express from 'express'
import cookieParser from 'cookie-parser'

import info from './controllers/info.controller.js'
import { router as userRouter}  from './routes/users.routes.js'
import { errorMiddleware } from './middlewares/error.middleware.js'

const app = express()

// middleware para leer JSON
app.use(express.json())

// middleware para acceder a las cookies
app.use(cookieParser())

// middleware para rutas
app.get('/api/v1/info', info)
app.use('/api/v1/users', userRouter)

// middleware manejo de errores centralizado (se ubica al final de todos los demás middleware)
app.use(errorMiddleware)

export default app