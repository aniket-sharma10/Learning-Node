const http = require('http')
const {readFileSync} = require('fs')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type': 'text/html'})
//     res.write('<h1>Home page</h1>')
//     res.end()
// })
// server.listen(5000)


// serving html page with its css
const homePage = readFileSync('./navbar-app/index.html')
const stylesheet = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const homeJs = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    // home page
    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }

    // style sheet
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(stylesheet)
        res.end()
    }

    // Image logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }

    // navbar js
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeJs)
        res.end()
    }

    // error page
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})
server.listen(5000)