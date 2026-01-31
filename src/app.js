import express from 'express'
import cookieParser from 'cookie-parser'

import info from './controllers/info.controller.js'
import userRouter from './routes/user.routes.js'

const app = express()

// middleware para leer JSON
app.use(express.json())

// middleware para acceder a las cookies
app.use(cookieParser())

app.use((req, res, next) => {
    console.log('--- REQUEST ---')
    console.log('URL:       ', req.url)
    console.log('MÉTODO:    ', req.method)
    console.log('COOKIES:   ', req.cookies)
    console.log('HEADERS:   ', req.headers)
    console.log('BODY:      ', req.body)

    next()
})

// middleware para rutas
app.get('/api/info', info)
app.use('/api/users', userRouter)

export default app 