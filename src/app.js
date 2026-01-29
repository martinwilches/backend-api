import express from 'express'

const app = express()

// middleware para leer JSON
app.use(express.json())

app.get('/health', (req, res) => {
    res.setHeader('X-App-Name', 'Backend API') // custom X-App-Name header

    res.status(503).json({
        status: 'error',
        message: 'Service unavailable'
    })
})

export default app