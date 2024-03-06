/*const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config({path: '../../.env'});

function tokenAuth(req, res, next){
    const token = req.header('Authorization');

    if (!token){
        return res.status(401).json({ message: "Token doesn't found"});
    }

    try{
        const decoded = jwt.verify(token, config.get(process.env.SECRET_KEY));
        req.user = decoded.user;
        next();
    }catch (err){
        res.status(401).json({message: "Invalid Token"})
    }
}

module.exports = tokenAuth;

90% - 95% İHTİMAL KULLANILMAYACAK DOSYA SİLİNECEK
*/