const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decodeToken = jwt.verify(token,'RANDOM_TOKEN_SECRET')  // la methode verify pour decoder le token
        const userId = decodeToken.userId
            
        req.auth = {
                userId: userId
            }
        next()
    }catch(error){
        res.status(401).json({error})
    }
}