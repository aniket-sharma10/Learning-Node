const http = require('http')
const { createReadStream, readFileSync } = require('fs')
const { error } = require('console')

const stream = createReadStream('./first.txt', 'utf-8')
// stream.on('open', (result) => {
//     console.log(result)
// })

http.createServer(function(req, res){
    // const data = readFileSync('./first.txt', 'utf-8')
    // res.end(data)

    // Sending file in chunks
    stream.on('open', () => {
        stream.pipe(res)
    })
    stream.on('error', (error) => {
        res.end(error)
    })
}).listen(5000)