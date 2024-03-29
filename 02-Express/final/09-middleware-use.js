const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//  Only applied to paths beginning with api (/api/products, /api/items, etc)
// app.use('/api' ,logger)

app.use([authorize, logger])

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
