const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write("Hello World. This is our webpage")
//     res.end()
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("This is our home page")
    }
    else if (req.url === '/contact') {
        res.end("welcome to contact page")
    }
    else res.end(`<h1>Oops</h1><p>No such page found</p><a href="/">Back to home</a>`)
})

server.listen(5000)