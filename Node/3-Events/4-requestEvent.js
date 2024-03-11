const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })


const server = http.createServer()

// emits request event everytime someone requests on a server
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)