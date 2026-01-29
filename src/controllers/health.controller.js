const healthCheck = (req, res) => {
    const isHealthy = Math.random() > .5 ? true : false

    if (isHealthy) {
        return res.status(200).json({
            status: 'ok',
            uptime: process.uptime()
        })
    }

    res.status(503).json({
        status: 'error',
        message: 'Servicio no disponible'
    })
} 

export default healthCheck