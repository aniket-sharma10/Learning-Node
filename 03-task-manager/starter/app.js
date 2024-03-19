const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./DB/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

// Middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 3000


// listen for requests only after db is connected
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on port ${port}..`))
    } catch (error) {
        console.log(error)
    }
}
start()