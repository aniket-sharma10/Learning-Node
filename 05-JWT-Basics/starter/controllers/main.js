// check username and password in post(login) request
// if exist create new jwt token
// send back to front end

// setup authentication so that only request with jwt can access the dashboard

const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login  =  async (req, res) => {
    const {username, password} = req.body

    // check in the controller
    if(!username || !password){
        throw new BadRequestError('Please provide email and password')
    }
    // just for demo, id is usually provided by DB
    const id = new Date().getDate()
    
    // we dont pass any confidential info in payload like password
    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable strings
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })
}

module.exports = {login, dashboard}