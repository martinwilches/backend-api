const info = (req, res) => {
    // headers de la request impresos en la consola
    console.log(req.headers)

    // envío de headers desde el servidor
    res.set('X-App-Version',  '1.0.0')

    res.end()
} 

export default info