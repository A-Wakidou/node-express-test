const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodeToken = jwt.verify(token, 'JWT-SECRET-STRING')
        const userId = decodeToken.userId
        if (req.query.userId && req.query.userId != userId) {
            throw 'User ID non valable'
        }
        else {
            next()
        }
    } catch (error) {
        console.error('auth middleware error', error);
        res.status(500).json({ error: error })
    }
}