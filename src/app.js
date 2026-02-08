import express from 'express'
import cookieParser from 'cookie-parser'

import { router as authRouter } from './routes/auth.routes.js'
import { router as usersRouter } from './routes/users.routes.js'

import { errorMiddleware } from './middlewares/error.middleware.js'

const app = express()

// middleware para leer JSON
app.use(express.json())

// middleware para acceder a las cookies
app.use(cookieParser())

// middleware para rutas
app.use('/api/v1/auth', authRouter) // autenticación / autorización
app.use('/api/v1/users', usersRouter)

// middleware manejo de errores centralizado (se ubica al final de todos los demás middleware)
app.use(errorMiddleware)

export default app
