const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const common = require('../utils/Common');
const com = new common();
//5f5b36a315917f7c284d2735
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjViMzZhMzE1OTE3ZjdjMjg0ZDI3MzUiLCJpYXQiOjE1OTk4MTMyODN9.AJGn9KeqVZUjqANPScMLXJahB0M3P6AGGok1ayVaUpA
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log(decoded._id);
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        com.setStatus('Auth Failed','Authentication failed',res);
        res.send(com.getResponse());
    }
}

module.exports = auth