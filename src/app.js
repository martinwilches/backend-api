import express from 'express'

import healthCheck from './controllers/health.controller.js'

const app = express()

// middleware para leer JSON
app.use(express.json())

app.get('/health', healthCheck)

export default app