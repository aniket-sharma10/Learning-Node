const authorize = (req, res, next) => {
    // console.log('Authorized')
    // next()

    const {user} = req.query;
    if(user === 'aniket'){
        req.user = {name: "aniket", id: 2}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize