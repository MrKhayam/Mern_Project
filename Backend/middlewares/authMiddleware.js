const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const authMiddleware = AsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id);
            next();
            console.log(req.user);
            
        } catch (error) {
            throw new Error('No Token Found!');
        }
    } else {
        throw new Error('No Token Found!');
    }
});



module.exports = authMiddleware;